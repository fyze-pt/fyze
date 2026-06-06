import Link from "next/link";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";

export default async function NotFound() {
  const ui = getUICopy(await getLocale());
  return (
    <div className="bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black text-white mb-4">
          {ui.notFound.title}
        </h1>
        <Link
          href="/"
          className="text-fyze hover:underline font-bold text-lg"
        >
          {ui.notFound.back}
        </Link>
      </div>
    </div>
  );
}
