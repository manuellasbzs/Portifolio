import { motion } from "framer-motion";
import { Palette, Code2, FileSpreadsheet, Languages, Braces, Layout, Smartphone, Apple, FileCode2, Component, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "Dev Web",
    level: "Em evolução",
    progress: 70,
    desc: "HTML, CSS e fundamentos de design responsivo. Foco em estrutura semântica, layouts modernos e boas práticas visuais.",
  },
  {
    icon: FileCode2,
    title: "JavaScript",
    level: "Em prática",
    progress: 60,
    desc: "Lógica, manipulação de DOM e interatividade. Base essencial para desenvolvimento web moderno e frameworks atuais.",
  },
  {
    icon: Component,
    title: "Vue.js",
    level: "Aprendendo",
    progress: 45,
    desc: "Framework progressivo para construir interfaces reativas, componentes reutilizáveis e SPAs elegantes.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    level: "Complemento",
    progress: 70,
    desc: "Prototipação no Figma, princípios de usabilidade e pesquisa em experiência do usuário aplicadas ao desenvolvimento.",
  },
  {
    icon: Smartphone,
    title: "Kotlin",
    level: "Iniciante",
    progress: 35,
    desc: "Linguagem oficial para desenvolvimento Android. Sintaxe moderna, segura e expressiva para apps mobile nativos.",
  },
  {
    icon: Apple,
    title: "Swift",
    level: "Iniciante",
    progress: 30,
    desc: "Linguagem da Apple para iOS, iPadOS e macOS. Performance nativa com sintaxe limpa e segura.",
  },
  {
    icon: Code2,
    title: "Python",
    level: "Iniciante",
    progress: 40,
    desc: "Sintaxe simples, lógica de programação e produtividade. Versátil para automação, dados e back-end.",
  },
  {
    icon: Braces,
    title: "C#",
    level: "Iniciante",
    progress: 35,
    desc: "Estruturas de matriz, repetição e vetores. Base sólida para desktop, web e jogos.",
  },
  {
    icon: Sparkles,
    title: "Eng. de Prompt",
    level: "Em prática",
    progress: 75,
    desc: "Construção de prompts eficazes para LLMs, automação de tarefas e integração de IA em fluxos de trabalho.",
  },
  {
    icon: Languages,
    title: "Inglês",
    level: "Avançado · C1",
    progress: 90,
    desc: "Fundamental para tecnologia: leitura de documentação, cursos internacionais e comunicação global.",
  },
  {
    icon: FileSpreadsheet,
    title: "Pacote Office",
    level: "Sólido",
    progress: 80,
    desc: "Word, Excel e PowerPoint para organização de dados, documentos e apresentações de impacto.",
  },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-32 bg-ink text-[hsl(32_50%_96%)] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-20 right-10 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="font-mono-disp text-xs uppercase tracking-[0.3em] text-primary-glow mb-4">
            ✦ 02 — Habilidades
          </div>
          <h2 className="font-display font-black text-[clamp(2.2rem,6vw,4.5rem)] leading-[1]">
            O que coloco<br /><span className="italic text-primary-glow">em prática.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/5 border border-white/15 backdrop-blur rounded-3xl p-7 hover:border-primary-glow transition-smooth"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="size-14 grid place-items-center rounded-2xl bg-primary text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <Icon className="size-7" />
                  </div>
                  <span className="font-mono-disp text-[10px] uppercase tracking-widest text-primary-glow">
                    {s.level}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">{s.desc}</p>

                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-primary to-primary-glow"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
