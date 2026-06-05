import { cookies } from "next/headers";

export const VARIANTS = ["a", "b", "c"] as const;
export type Variant = (typeof VARIANTS)[number];
export const VARIANT_COOKIE = "fyze_variant";

export async function getVariant(): Promise<Variant> {
  const store = await cookies();
  const value = store.get(VARIANT_COOKIE)?.value;
  if (value && (VARIANTS as readonly string[]).includes(value)) {
    return value as Variant;
  }
  return "a";
}
