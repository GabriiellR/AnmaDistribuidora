"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Recycle, TrendingDown, Users, Award, ArrowDown } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";        

const impacts = [
  {
    icon: Recycle,
    title: "Resíduos Reduzidos",
    description: "Tubos de papelão que seriam descartados são recolhidos e reinseridos no processo industrial.",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: TrendingDown,
    title: "Menos Matéria-Prima",
    description: "Diminuição da demanda por matéria-prima virgem através da reutilização eficiente.",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    iconColor: "text-teal-600",
  },
  {
    icon: Leaf,
    title: "Ciclo Otimizado",
    description: "Otimização do ciclo produtivo com menor impacto ambiental em cada etapa.",
    color: "from-green-500 to-teal-600",
    bg: "bg-green-50",
    border: "border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Parceria ESG",
    description: "Apoio aos clientes no cumprimento de suas metas de sustentabilidade e responsabilidade socioambiental.",
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-50",
    border: "border-lime-200",
    iconColor: "text-lime-700",
  },
];

export default function SustentabilidadePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="overflow-hidden">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[#0a1f0e] overflow-hidden"
      >
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#22c55e' : '#16a34a'} 0%, transparent 70%)`,
              }}
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full px-5 py-2 text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <Leaf className="h-4 w-4" />
            Compromisso Ambiental
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {/* <div className="flex"> */}
            Sustenta
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">
              bilidade
            </span>
            {/* </div> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Na ANMA Distribuidora, sustentabilidade não é apenas um conceito —
            é uma prática integrada ao nosso modelo de negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#nossa-iniciativa"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
            >
              Conheça nossa iniciativa
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Fale conosco
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      <section id="nossa-iniciativa" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Main circle illustration */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-200 animate-spin" style={{ animationDuration: "30s" }} />
                {/* Middle ring */}
                <div className="absolute inset-8 rounded-full border-2 border-emerald-100" />
                {/* Center */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                  <div className="text-center text-white">
                    <Recycle className="h-16 w-16 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="font-black text-2xl">Economia</p>
                    <p className="font-black text-2xl">Circular</p>
                  </div>
                </div>

                {/* Floating labels */}
                {[
                  { label: "Coleta", angle: 0, color: "bg-teal-500" },
                  { label: "Reuso", angle: 120, color: "bg-emerald-500" },
                  { label: "Ciclo", angle: 240, color: "bg-green-600" },
                ].map(({ label, angle, color }) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 42 * Math.sin(rad);
                  const y = 50 - 42 * Math.cos(rad);
                  return (
                    <motion.div
                      key={label}
                      className={`absolute ${color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: angle / 120 }}
                    >
                      {label}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                Nossa Iniciativa
              </span>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Recompra de{" "}
                <span className="text-emerald-600">tubos de papelão</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Como parte do nosso compromisso com a responsabilidade ambiental e a
                  economia circular, implementamos uma <strong className="text-gray-800">política estruturada de recompra</strong> dos
                  tubos de papelão utilizados nas bobinas de filme stretch fornecidas
                  aos nossos clientes.
                </p>
                <p>
                  Após o uso do filme, esses tubos — que tradicionalmente seriam
                  descartados — passam a ter um novo destino: são <strong className="text-gray-800">recolhidos e
                  reinseridos em nosso processo industrial</strong>, promovendo sua
                  reutilização de forma eficiente e consciente.
                </p>
                <p>
                  Ao adotar esse modelo, a ANMA reforça seu papel como{" "}
                  <strong className="text-gray-800">parceira estratégica</strong> de empresas que buscam
                  não apenas eficiência operacional, mas também alinhamento com
                  práticas ESG e responsabilidade socioambiental.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IMPACTOS ──────────────────────────────────────── */}
      <section className="bg-[#f0fdf4] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Impactos Diretos
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Resultados que fazem{" "}
              <span className="text-emerald-600">a diferença</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`relative overflow-hidden rounded-2xl border ${item.border} ${item.bg} p-8 group transition-all duration-300`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm mb-5`}>
                    <Icon className={`h-7 w-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Decorative gradient corner */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO QUOTE ───────────────────────────────── */}
      <section className="bg-[#0a1f0e] py-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-emerald-500 text-8xl font-black leading-none mb-4 opacity-40">"</div>
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Seguimos comprometidos em desenvolver soluções que conciliem{" "}
              <span className="text-emerald-400">performance</span>,{" "}
              <span className="text-emerald-400">economia</span> e{" "}
              <span className="text-emerald-400">respeito ao meio ambiente</span>.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-emerald-500/50" />
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
                ANMA Distribuidora
              </span>
              <div className="h-px w-12 bg-emerald-500/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ESG SECTION ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                letter: "E",
                title: "Environmental",
                desc: "Redução de resíduos sólidos e diminuição da demanda por matéria-prima virgem em nossa cadeia produtiva.",
                gradient: "from-emerald-500 to-green-600",
              },
              {
                letter: "S",
                title: "Social",
                desc: "Apoio aos nossos parceiros e clientes no cumprimento de suas metas socioambientais e compromissos com a comunidade.",
                gradient: "from-teal-500 to-emerald-500",
              },
              {
                letter: "G",
                title: "Governance",
                desc: "Política estruturada e transparente de recompra, com práticas comerciais éticas e rastreáveis.",
                gradient: "from-green-600 to-teal-600",
              },
            ].map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className={`text-8xl font-black bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent leading-none mb-4`}>
                  {item.letter}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="h-16 w-16 text-white/80 mx-auto mb-6" strokeWidth={1} />
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Seja um parceiro sustentável
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Junte-se às empresas que já fazem parte da nossa cadeia de economia circular.
              Fale conosco e descubra como podemos fortalecer juntos as práticas ESG do seu negócio.
            </p>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 font-black px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Fale no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
