"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { getWebsiteCases } from "@/data/websites-cases";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/components/LocaleProvider";

const VARIANT = "websites-lp";

export function WebsitesCases() {
  const { ui, locale } = useLocale();
  const websitesCases = getWebsiteCases(locale);
  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {websitesCases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/sites/${c.slug}`}
                onClick={() =>
                  trackEvent("case_view", {
                    slug: c.slug,
                    client: c.client,
                    location: "websites_cases",
                    variant: VARIANT,
                  })
                }
                className="group block bg-zinc-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-fyze/40 transition-colors duration-500 h-full flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                  <img
                    src={c.heroImage}
                    alt={`Site ${c.client}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-fyze text-xs font-black uppercase tracking-widest mb-3">
                    {c.scope}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
                    {c.client}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base font-medium leading-snug mb-5 flex-1">
                    {c.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-fyze text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    {ui.websiteCase.seeCase}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
