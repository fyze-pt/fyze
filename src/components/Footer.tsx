"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const markSrc = "/y-fyze.svg";
  const { ui } = useLocale();
  const whatsappUrl = buildWhatsappUrl(ui.whatsapp.message);

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 sm:pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-start gap-4 sm:gap-5">
              <img
                src={markSrc}
                alt="Fyze"
                className="h-20 sm:h-24 w-auto shrink-0"
              />
              <p className="text-zinc-400 max-w-md leading-relaxed text-base sm:text-lg font-medium pt-1">
                {ui.footer.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest mb-5 sm:mb-8 text-sm text-white">{ui.footer.linksRapidos}</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><Link href="/metodo" className="text-zinc-400 hover:text-fyze transition-colors font-bold uppercase tracking-widest text-sm">{ui.footer.metodo}</Link></li>
              <li><Link href="/sobre" className="text-zinc-400 hover:text-fyze transition-colors font-bold uppercase tracking-widest text-sm">{ui.footer.sobreNos}</Link></li>
              <li><Link href="/diagnostico" className="text-zinc-400 hover:text-fyze transition-colors font-bold uppercase tracking-widest text-sm">{ui.footer.ctaAnalisar}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest mb-5 sm:mb-8 text-sm text-white">{ui.footer.contacto}</h4>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-fyze transition-colors font-bold text-sm">
              <Phone size={18} />
              +351 915 709 951
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Fyze Agency. {ui.footer.rights}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-zinc-500 font-medium">
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">{ui.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
