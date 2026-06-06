"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { setConsent, readConsent, CONSENT_EVENT } from "@/lib/analytics";
import { useLocale } from "@/components/LocaleProvider";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { ui } = useLocale();

  useEffect(() => {
    setVisible(readConsent() === "unknown");
    const onChange = () => setVisible(false);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const accept = () => setConsent("all");
  const reject = () => setConsent("essential");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-[1100px] mx-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl pointer-events-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed flex-1 font-medium">
                {ui.cookieConsent.message}{" "}
                <a
                  href="/politica-de-privacidade"
                  className="text-fyze hover:underline"
                >
                  {ui.cookieConsent.saberMais}
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={reject}
                  className="px-5 py-3 rounded-xl border border-white/15 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                >
                  {ui.cookieConsent.apenasEssenciais}
                </button>
                <button
                  onClick={accept}
                  className="px-6 py-3 rounded-xl bg-fyze text-zinc-950 text-sm font-black uppercase tracking-widest hover:bg-white transition-colors"
                >
                  {ui.cookieConsent.aceitarTudo}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
