import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/manuella-zanola-88bbb9303", handle: "/manuella-zanola" },
  { label: "GitHub", icon: Github, href: "https://github.com/manuellasbzs", handle: "@manuellasbzs" },
  { label: "Gmail", icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=manuellasofiazanola@gmail.com&subject=Contato%20pelo%20Portfólio", handle: "manuellasofiazanola@gmail.com" },
];

export const Contact = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="font-mono-disp text-xs uppercase tracking-[0.3em] text-primary mb-4">
            ✦ 04 — Contato
          </div>
          <h2 className="font-display font-black text-[clamp(2.5rem,9vw,7rem)] leading-[0.95]">
            Vamos<br />
            <span className="italic gradient-text">criar juntos?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-xl leading-relaxed">
            Aberta para oportunidades, conexões e bons papos sobre design, tecnologia e o que mais cruzar o caminho.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-surface-elevated border-2 border-foreground rounded-3xl p-7 overflow-hidden transition-smooth hover:bg-foreground hover:text-background"
              >
                <div className="flex items-start justify-between mb-12">
                  <Icon className="size-8" />
                  <ArrowUpRight className="size-6 group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <div className="font-display text-3xl font-black mb-1">{s.label}</div>
                <div className="font-mono-disp text-xs opacity-70 truncate">{s.handle}</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
