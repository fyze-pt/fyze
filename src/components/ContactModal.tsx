"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Mail,
  Phone,
  ArrowRight,
  Loader2,
  Check,
  MapPin,
} from "lucide-react";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { trackEvent } from "@/lib/analytics";

type ContactModalContext = {
  open: (origin?: string) => void;
  close: () => void;
};

const Ctx = createContext<ContactModalContext | null>(null);

export function useContactModal(): ContactModalContext {
  const ctx = useContext(Ctx);
  if (!ctx)
    throw new Error("useContactModal must be used inside <ContactModalProvider>");
  return ctx;
}

export function ContactModalProvider({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState<string | undefined>();

  const open = useCallback(
    (o?: string) => {
      setOrigin(o);
      setIsOpen(true);
      trackEvent("cta_click", {
        location: "contact_modal_open",
        label: o ?? "unknown",
        variant,
      });
    },
    [variant],
  );

  const close = useCallback(() => setIsOpen(false), []);

  // Suporte para abrir via custom event (para componentes fora do provider, se houver)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ origin?: string }>).detail;
      open(detail?.origin);
    };
    window.addEventListener("fyze:open-contact", handler);
    return () => window.removeEventListener("fyze:open-contact", handler);
  }, [open]);

  // Travar scroll do body quando modal aberto + ESC fecha
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <ContactModal close={close} origin={origin} variant={variant} />
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

function ContactModal({
  close,
  origin,
  variant,
}: {
  close: () => void;
  origin?: string;
  variant?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const form = formRef.current!;
    const fd = new FormData(form);
    const data: Record<string, string> = { origem: origin ?? "" };
    fd.forEach((v, k) => {
      if (typeof v === "string") data[k] = v;
    });

    try {
      await submitToGoogleSheets("Contacto", data);
      trackEvent("form_submit", { form: "contact_modal", origin, variant });
      setStatus("success");
      form.reset();
      setTimeout(() => {
        close();
        setStatus("idle");
      }, 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const gargaloOptions = [
    "Não tenho leads",
    "Tenho leads mas não converto",
    "Quero escalar",
    "Preciso de estrutura",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors z-10 p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          <div className="md:col-span-2 bg-zinc-950 p-6 sm:p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase leading-[1] text-white mb-4">
              Seu negócio não precisa de mais{" "}
              <span className="text-fyze line-through opacity-60">
                marketing
              </span>
              .
              <br />
              <span className="text-fyze">
                Precisa de um sistema que gere clientes.
              </span>
            </h2>
            <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-8">
              Preencha o formulário e vamos identificar onde você está a
              perder dinheiro no digital. Em seguida, mostramos como corrigir
              isso.
            </p>

            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-xs uppercase tracking-widest font-bold text-fyze mb-5">
                Preferir falar diretamente?
              </p>
              <div className="space-y-5">
                <a
                  href="tel:+351915709951"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-fyze group-hover:border-fyze transition-all shrink-0">
                    <Phone className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                  </span>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                      Telefone
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-fyze transition-colors">
                      +351 915 709 951
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@fyze.pt"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-fyze group-hover:border-fyze transition-all shrink-0">
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                  </span>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                      Email
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-fyze transition-colors break-all">
                      hello@fyze.pt
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                  </span>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                      Localização
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Lisboa &amp; Algarve
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-3 p-6 sm:p-8 md:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-fyze transition-colors"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-fyze transition-colors"
                  placeholder="O melhor email para contacto"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="telefone"
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-fyze transition-colors"
                placeholder="+351 ..."
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                Onde você sente que está travado?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gargaloOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-zinc-950 cursor-pointer hover:border-fyze/50 transition-colors has-[:checked]:border-fyze has-[:checked]:bg-fyze/5"
                  >
                    <input
                      type="radio"
                      name="gargalo"
                      value={opt}
                      required
                      className="w-4 h-4 accent-fyze"
                    />
                    <span className="text-zinc-300 text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                rows={3}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-fyze transition-colors resize-none"
                placeholder="Descreva rapidamente o seu negócio e o que sente que não está a funcionar"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full group flex items-center justify-center gap-3 bg-fyze text-zinc-950 px-6 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-[0.14em] transition-all hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" && (
                <Loader2 className="w-5 h-5 animate-spin" />
              )}
              {status === "success" && (
                <>
                  <Check className="w-5 h-5" /> Mensagem Enviada!
                </>
              )}
              {status === "error" && "Erro. Tente novamente."}
              {status === "idle" && (
                <>
                  Quero identificar os meus gargalos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
