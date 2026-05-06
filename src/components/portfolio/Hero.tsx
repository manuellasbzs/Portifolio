import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import perfil from "@/assets/manuella-perfil.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 bg-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Floating blobs */}
      <div className="absolute -top-20 -left-20 size-72 rounded-full bg-primary/30 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 size-80 rounded-full bg-accent/30 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "-4s" }} />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        {/* Left text */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated border border-border text-xs font-mono-disp uppercase tracking-widest"
          >
            <Sparkles className="size-3.5 text-primary" />
            Disponível para projetos · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black leading-[0.95] text-[clamp(2.8rem,9vw,7rem)]"
          >
            Olá, sou<br />
            <span className="gradient-text italic">Manuella</span><br />
            <span className="relative inline-block">
              Zanola
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 w-full bg-accent origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-xl text-muted-foreground leading-relaxed"
          >
            Estudante de <strong className="text-foreground">TI e Mobile / Dev Web</strong> — explorando código, design e novas tecnologias para construir produtos digitais com propósito.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-4 border-primary pl-4 italic font-display text-lg"
          >
            “Já que sou, o jeito é ser.” <span className="not-italic text-sm text-muted-foreground">— Clarice Lispector</span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Ver projetos
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-semibold border-2 border-foreground hover:bg-foreground hover:text-background transition-smooth"
            >
              Vamos conversar
            </a>
          </motion.div>
        </div>

        {/* Right portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 bg-magenta rounded-[2.5rem] rotate-3 shadow-glow" />
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-foreground shadow-bold">
            <img src={perfil} alt="Foto de Manuella Zanola" className="w-full h-full object-cover" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-16 bg-surface-elevated rounded-2xl px-4 py-3 border-2 border-foreground shadow-bold-lime"
          >
            <div className="font-mono-disp text-[10px] uppercase text-muted-foreground">Idade</div>
            <div className="font-display font-bold">17 anos</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 overflow-hidden border-y-2 border-foreground bg-foreground text-background py-4">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl md:text-5xl font-black">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {["Dev Web", "✦", "Mobile", "✦", "UI/UX", "✦", "JavaScript", "✦", "Vue.js", "✦", "Python", "✦", "C#", "✦", "Kotlin", "✦", "Swift", "✦", "Eng. Prompt", "✦", "Inglês C1", "✦"].map((t, j) => (
                <span key={`${i}-${j}`} className={j % 2 === 0 ? "text-background" : "text-primary"}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
