"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Instagram } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-900 py-20 lg:py-32">
      {/* Abstract Background Decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[128px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
              <Code2 size={16} />
              Tecnologia para Resultados
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-8 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-7xl"
          >
            Tecnologia sob medida para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Escalar o seu Negócio.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Desenvolvemos sistemas corporativos, plataformas de vendas e aplicativos que automatizam rotinas e reduzem custos. Transformamos a sua ideia em um produto real com rapidez e segurança.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap"
          >
            <a href="#contato"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-8 py-4 text-base font-semibold text-slate-950 transition-all hover:bg-green-400 sm:w-auto"
            >
              Iniciar Projeto
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="#projetos"
              className="flex w-full items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-medium text-slate-100 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
            >
              Ver Portfólio
            </a>
            
            <a href="https://instagram.com/theforjastudio" target="_blank" rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90 sm:w-auto shadow-lg shadow-pink-500/20"
            >
              <Instagram size={18} className="transition-transform group-hover:scale-110" />
              Nosso Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}





