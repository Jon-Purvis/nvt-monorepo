import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// =============================================================================
// CSS UTILITIES
// =============================================================================

/**
 * Combines Tailwind CSS classes with proper conflict resolution.
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// =============================================================================
// STRING UTILITIES
// =============================================================================

/**
 * Converts a string to a URL-friendly slug.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// =============================================================================
// PRICE UTILITIES
// =============================================================================

/**
 * Calculates the display price for a menu item.
 * Returns the override price if present, otherwise returns the menu price.
 * This ensures consistent price display logic across all menu components.
 *
 * @param menuPrice - The standard menu price
 * @param overridePrice - Optional override price that takes precedence
 * @returns The price to display on the menu
 */
export function getDisplayPrice(
  menuPrice: number,
  overridePrice?: number
): number {
  return overridePrice ?? menuPrice;
}

/**
 * Formats a price for display as a currency string.
 * Uses override price if available, otherwise uses menu price.
 * Returns undefined if no price is provided.
 *
 * @param menuPrice - The base menu price (optional)
 * @param overridePrice - Optional override price (takes precedence)
 * @returns Formatted price string (e.g., "$12.00") or undefined
 */
export function formatPriceForDisplay(
  menuPrice?: number,
  overridePrice?: number
): string | undefined {
  const price = overridePrice ?? menuPrice;
  if (price === undefined) return undefined;
  return `$${price.toFixed(2)}`;
}
