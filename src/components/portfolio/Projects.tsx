import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Meu Portfólio (v1)",
    tag: "HTML · CSS · JS · Figma",
    desc: "Primeira versão do portfólio: prototipação no Figma, design responsivo e alternância entre modo claro e escuro para uma melhor experiência do usuário.",
    href: "https://manuellasbzs.github.io/Portfolio/",
    color: "bg-primary text-primary-foreground",
  },
  {
    n: "02",
    title: "Reprodução de Site",
    tag: "HTML · CSS · UI",
    desc: "Reprodução fiel do layout de um site existente, aplicando boas práticas de estrutura semântica, responsividade e organização visual.",
    href: "https://manuellasbzs.github.io/Clone-de-Interface/",
    color: "bg-accent text-accent-foreground",
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="font-mono-disp text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ✦ 03 — Projetos
            </div>
            <h2 className="font-display font-black text-[clamp(2.2rem,6vw,4.5rem)] leading-[1]">
              Coisas que eu<br /><span className="italic gradient-text">construí.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Cada projeto é uma chance de aprender algo novo. Aqui ficam os experimentos que se tornaram entregas.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="group block border-2 border-foreground rounded-3xl p-8 md:p-12 bg-surface-elevated hover:shadow-bold transition-smooth"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className={`inline-flex size-16 rounded-2xl ${p.color} items-center justify-center font-display text-2xl font-black border-2 border-foreground`}>
                    {p.n}
                  </div>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <div className="font-mono-disp text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight group-hover:gradient-text transition-smooth">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{p.desc}</p>
                </div>

                <div className="md:col-span-3 flex md:justify-end">
                  <div className="size-16 rounded-full border-2 border-foreground grid place-items-center group-hover:bg-foreground group-hover:text-background transition-smooth">
                    <ArrowUpRight className="size-7 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-2 border-dashed border-border rounded-3xl p-12 text-center"
          >
            <p className="font-display text-2xl text-muted-foreground italic">
              Mais projetos chegando em breve <span className="text-primary">✦</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
