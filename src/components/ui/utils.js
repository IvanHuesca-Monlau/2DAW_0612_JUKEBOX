/**
 * Utility to merge Tailwind CSS classes
 * Filters out falsy values and joins with spaces
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
