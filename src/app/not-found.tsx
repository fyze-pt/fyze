import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black text-white mb-4">
          Página não encontrada
        </h1>
        <Link
          href="/"
          className="text-fyze hover:underline font-bold text-lg"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
