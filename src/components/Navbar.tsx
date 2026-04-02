import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}fyze.svg`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-xl py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logoSrc}
                alt="Fyze"
                className="h-12 sm:h-14 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-fyze transition-colors text-sm font-bold uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="bg-fyze text-zinc-950 hover:bg-fyze/90 px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                Falar Connosco
              </a>
            </div>
          </div>

          <div className="md:hidden shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2 -mr-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950 border-b border-white/5 absolute w-full"
        >
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-fyze block py-3 text-base font-bold uppercase tracking-[0.18em] border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-fyze text-zinc-950 block py-4 rounded-xl text-sm sm:text-base font-black uppercase tracking-[0.18em] mt-6 text-center"
            >
              Falar Connosco
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
