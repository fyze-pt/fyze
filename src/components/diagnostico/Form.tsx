"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { trackEvent } from "@/lib/analytics";
import type { DiagnosticoCopy } from "@/data/diagnostico-copy";

const VARIANT = "diagnostico-lp";

export function DiagnosticoForm({
  copy,
}: {
  copy: DiagnosticoCopy["finalCta"];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    setStatus("loading");
    trackEvent("form_start", { form: "diagnostico", variant: VARIANT });

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    try {
      await submitToGoogleSheets("Diagnóstico", data);
      trackEvent("form_submit", {
        form: "diagnostico",
        variant: VARIANT,
        dificuldade: data.dificuldade,
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="diagnostico-form"
      className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5 relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fyze/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-5 text-balance">
            {copy.headline}
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-snug max-w-2xl mx-auto text-pretty">
            {copy.subhead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-zinc-900/70 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          {status === "success" ? (
            <div className="text-center py-10 sm:py-16">
              <div className="w-16 h-16 rounded-full bg-fyze/15 border border-fyze/40 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-fyze" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                Recebemos.
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 font-medium leading-snug max-w-md mx-auto">
                Vamos analisar o seu negócio e voltar dentro de 24h com a primeira leitura.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors"
                    placeholder="O seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors"
                    placeholder="o.seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Negócio / Área de atuação
                </label>
                <input
                  type="text"
                  name="negocio"
                  required
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors"
                  placeholder="Ex: Restaurante, Clínica, E-commerce..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Maior dificuldade hoje
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {copy.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5"
                    >
                      <input
                        type="radio"
                        name="dificuldade"
                        value={option}
                        required
                        className="w-4 h-4 accent-fyze shrink-0"
                      />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium leading-snug">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fyze transition-colors resize-none"
                  placeholder="Descreva o seu negócio e o que sente que não está a funcionar."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-3 bg-fyze text-zinc-950 px-8 py-5 rounded-full text-sm md:text-base font-black uppercase tracking-[0.16em] sm:tracking-widest transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,240,255,0.45)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "error" ? (
                  "Erro. Tente novamente."
                ) : (
                  <>
                    {copy.formCta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
