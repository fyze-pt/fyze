"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { useLocale } from "@/components/LocaleProvider";

const SHOW_DELAY_MS = 1500;

export function WhatsAppButton({ variant }: { variant?: string } = {}) {
  const [showBubble, setShowBubble] = useState(false);
  const { ui } = useLocale();
  const whatsappUrl = buildWhatsappUrl(ui.whatsapp.message);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => setShowBubble(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBubble(false);
  };

  const onWhatsAppClick = (location: string) => {
    trackEvent("whatsapp_click", { variant, location });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onWhatsAppClick("bubble")}
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="relative bg-zinc-900 border border-white/10 text-white pl-4 pr-10 py-3 rounded-2xl shadow-2xl max-w-[240px] hover:border-fyze/50 transition-colors"
          >
            <p className="text-sm font-bold leading-snug">
              {ui.whatsapp.bubble}
            </p>
            <button
              type="button"
              onClick={dismiss}
              aria-label={ui.whatsapp.closeAria}
              className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
            <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-zinc-900 border-r border-b border-white/10 rotate-45" />
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onWhatsAppClick("button")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: "#D4FF00" }}
        aria-label={ui.whatsapp.fabAria}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}
