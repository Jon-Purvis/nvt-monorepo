import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Inventory items for the tavern
  inventoryItems: defineTable({
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
    lastUpdated: v.number(),
    updatedBy: v.optional(v.string()),
  }).index("by_category", ["category"]),

  // Inventory count logs
  inventoryCounts: defineTable({
    itemId: v.id("inventoryItems"),
    previousQuantity: v.number(),
    newQuantity: v.number(),
    countedAt: v.number(),
    countedBy: v.optional(v.string()),
    notes: v.optional(v.string()),
  }).index("by_item", ["itemId"]),

  // Users (staff members)
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.union(
      v.literal("owner"),
      v.literal("manager"),
      v.literal("bartender"),
      v.literal("staff")
    ),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
