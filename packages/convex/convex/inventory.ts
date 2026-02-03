import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {
    category: v.optional(
      v.union(
        v.literal("beer"),
        v.literal("wine"),
        v.literal("spirits"),
        v.literal("food"),
        v.literal("supplies")
      )
    ),
  },
  handler: async (ctx, args) => {
    if (args.category) {
      return await ctx.db
        .query("inventoryItems")
        .withIndex("by_category", (q) => q.eq("category", args.category))
        .collect();
    }
    return await ctx.db.query("inventoryItems").collect();
  },
});

export const get = query({
  args: { id: v.id("inventoryItems") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getLowStock = query({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query("inventoryItems").collect();
    return items.filter((item) => item.quantity <= item.minQuantity);
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    category: v.union(
      v.literal("beer"),
      v.literal("wine"),
      v.literal("spirits"),
      v.literal("food"),
      v.literal("supplies")
    ),
    quantity: v.number(),
    unit: v.string(),
    minQuantity: v.number(),
    cost: v.optional(v.number()),
    supplier: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.quantity < 0) {
      throw new Error("Quantity cannot be negative");
    }
    if (args.minQuantity < 0) {
      throw new Error("Minimum quantity cannot be negative");
    }
    return await ctx.db.insert("inventoryItems", {
      ...args,
      lastUpdated: Date.now(),
    });
  },
});

export const updateQuantity = mutation({
  args: {
    id: v.id("inventoryItems"),
    newQuantity: v.number(),
    countedBy: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.newQuantity < 0) {
      throw new Error("Quantity cannot be negative");
    }
    const item = await ctx.db.get(args.id);
    if (!item) throw new Error("Item not found");

    await ctx.db.insert("inventoryCounts", {
      itemId: args.id,
      previousQuantity: item.quantity,
      newQuantity: args.newQuantity,
      countedAt: Date.now(),
      countedBy: args.countedBy,
      notes: args.notes,
    });

    await ctx.db.patch(args.id, {
      quantity: args.newQuantity,
      lastUpdated: Date.now(),
      updatedBy: args.countedBy,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("inventoryItems"),
    name: v.optional(v.string()),
    category: v.optional(
      v.union(
        v.literal("beer"),
        v.literal("wine"),
        v.literal("spirits"),
        v.literal("food"),
        v.literal("supplies")
      )
    ),
    unit: v.optional(v.string()),
    minQuantity: v.optional(v.number()),
    cost: v.optional(v.number()),
    supplier: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const filtered = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(id, {
      ...filtered,
      lastUpdated: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { id: v.id("inventoryItems") },
  handler: async (ctx, args) => {
    // Delete related inventory count records
    const counts = await ctx.db
      .query("inventoryCounts")
      .withIndex("by_item", (q) => q.eq("itemId", args.id))
      .collect();
    for (const count of counts) {
      await ctx.db.delete(count._id);
    }
    // Delete the item
    await ctx.db.delete(args.id);
  },
});
