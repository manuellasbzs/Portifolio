import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, FileText } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mz-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mz-theme", next ? "dark" : "light");
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-black tracking-tight">
            mz<span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-surface-elevated/60 backdrop-blur-md border border-border rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1pN-ABGSXhvB8OzyEBdDh7Cev23F5O5xL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <FileText className="size-4" />
            Currículo
          </a>
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="size-10 grid place-items-center rounded-full border border-border bg-surface-elevated hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
