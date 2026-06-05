import { NextRequest, NextResponse } from "next/server";

const VARIANTS = ["a", "b", "c"] as const;
type Variant = (typeof VARIANTS)[number];
const VARIANT_COOKIE = "fyze_variant";
const ONE_YEAR = 60 * 60 * 24 * 365;

// A/B test temporariamente desativado — fixar variante "c" (autoridade + 4 anos PT).
// Para reativar: trocar AB_ENABLED para true.
const AB_ENABLED = false;
const FIXED_VARIANT: Variant = "c";

function pickVariant(): Variant {
  if (!AB_ENABLED) return FIXED_VARIANT;
  const idx = Math.floor(Math.random() * VARIANTS.length);
  return VARIANTS[idx];
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const override = url.searchParams.get("variant") as Variant | null;

  // Override manual via ?variant=a|b|c → fixa cookie e redireciona limpando a query
  if (override && (VARIANTS as readonly string[]).includes(override)) {
    const cleanUrl = url.clone();
    cleanUrl.searchParams.delete("variant");
    const redirect = NextResponse.redirect(cleanUrl);
    redirect.cookies.set({
      name: VARIANT_COOKIE,
      value: override,
      maxAge: ONE_YEAR,
      path: "/",
      sameSite: "lax",
    });
    redirect.headers.set("x-fyze-variant", override);
    redirect.headers.set("Cache-Control", "no-store");
    return redirect;
  }

  const res = NextResponse.next();
  const existing = req.cookies.get(VARIANT_COOKIE)?.value as
    | Variant
    | undefined;

  // Quando A/B está desativado, força sempre a variante fixa (sobrescreve cookie antigo).
  // Quando ativo, respeita cookie existente para manter o usuário no mesmo bucket.
  const variant: Variant = AB_ENABLED
    ? existing && (VARIANTS as readonly string[]).includes(existing)
      ? existing
      : pickVariant()
    : FIXED_VARIANT;

  if (variant !== existing) {
    res.cookies.set({
      name: VARIANT_COOKIE,
      value: variant,
      maxAge: ONE_YEAR,
      path: "/",
      sameSite: "lax",
    });
  }

  res.headers.set("x-fyze-variant", variant);
  res.headers.set("Cache-Control", "private, no-cache, must-revalidate");
  return res;
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
