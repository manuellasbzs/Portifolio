import { motion } from "framer-motion";
import { Terminal, Sparkles, Heart, Code2 } from "lucide-react";

const stats = [
  { k: "17", v: "Anos" },
  { k: "3º", v: "Ano técnico" },
  { k: "C1", v: "Inglês" },
  { k: "2026", v: "Conclusão" },
];

export const About = () => {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="container grid lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          {/* Creative card: terminal + identity */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent rounded-3xl -rotate-3" />
            <div className="relative rounded-3xl border-4 border-foreground shadow-bold bg-surface-elevated overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-5 py-3 border-b-2 border-foreground bg-foreground text-background">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-destructive" />
                  <span className="size-3 rounded-full bg-accent" />
                  <span className="size-3 rounded-full bg-primary-glow" />
                </div>
                <span className="font-mono-disp text-[10px] uppercase tracking-widest opacity-70">~/manuella.dev</span>
                <Terminal className="size-3.5 opacity-70" />
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono-disp text-xs space-y-2 bg-surface-elevated">
                <div><span className="text-primary">$</span> whoami</div>
                <div className="text-muted-foreground pl-3">manuella.zanola</div>
                <div><span className="text-primary">$</span> cat focus.json</div>
                <div className="pl-3 leading-relaxed">
                  <span className="text-muted-foreground">{"{"}</span><br />
                  <span className="pl-3 text-foreground">"role"</span>: <span className="text-primary">"TI e Mobile / Dev Web"</span>,<br />
                  <span className="pl-3 text-foreground">"stack"</span>: [<span className="text-primary">"JS"</span>, <span className="text-primary">"Vue"</span>, <span className="text-primary">"Kotlin"</span>],<br />
                  <span className="pl-3 text-foreground">"mode"</span>: <span className="text-primary">"sempre aprendendo"</span><br />
                  <span className="text-muted-foreground">{"}"}</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-primary">$</span>
                  <span className="inline-block w-2 h-3.5 bg-foreground animate-pulse" />
                </div>
              </div>

              {/* Quick chips */}
              <div className="grid grid-cols-3 border-t-2 border-foreground divide-x-2 divide-foreground">
                <div className="p-4 flex flex-col items-center gap-1">
                  <Code2 className="size-4 text-primary" />
                  <span className="font-mono-disp text-[9px] uppercase tracking-widest text-muted-foreground">code</span>
                </div>
                <div className="p-4 flex flex-col items-center gap-1">
                  <Sparkles className="size-4 text-accent-foreground" />
                  <span className="font-mono-disp text-[9px] uppercase tracking-widest text-muted-foreground">create</span>
                </div>
                <div className="p-4 flex flex-col items-center gap-1">
                  <Heart className="size-4 text-primary" />
                  <span className="font-mono-disp text-[9px] uppercase tracking-widest text-muted-foreground">care</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.v} className="border-2 border-foreground rounded-2xl p-4 bg-surface-elevated">
                <div className="font-display text-3xl font-black gradient-text">{s.k}</div>
                <div className="font-mono-disp text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <div className="font-mono-disp text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ✦ 01 — Sobre mim
            </div>
            <h2 className="font-display font-black text-[clamp(2.2rem,6vw,4.5rem)] leading-[1] mb-2">
              Tecnologia com<br /><span className="italic gradient-text">alma criativa.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Meu nome é <strong className="text-foreground">Manuella Sofia Braga Zanola Souza</strong>, tenho 17 anos e sou estudante do curso técnico em Informática no <strong className="text-foreground">Colégio e Faculdade Cotemig</strong> (unidade Barroca).
            </p>
            <p>
              Tenho grande interesse pela área de <strong className="text-foreground">Tecnologia da Informação</strong>, com foco em <strong className="text-foreground">desenvolvimento web</strong> e <strong className="text-foreground">mobile</strong>. Gosto de explorar diferentes linguagens, frameworks e ferramentas, sempre buscando aplicar boas práticas e contribuir com soluções criativas, funcionais e bem desenhadas.
            </p>
            <p>
              Atualmente, estou no 3º ano do curso técnico, com previsão de conclusão em <strong className="text-foreground">dezembro de 2026</strong>, e sigo dedicada a expandir meu conhecimento em tecnologia, design e inovação.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {["criatividade", "curiosidade", "design thinking", "proatividade", "atenção ao detalhe"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-border bg-surface-elevated text-sm font-medium hover:border-primary hover:text-primary transition-smooth"
              >
                #{t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
