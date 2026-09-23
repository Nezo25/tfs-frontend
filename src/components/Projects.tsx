"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Evente Set",
    category: "Plataforma Completa",
    description: "Plataforma inteligente de gestão e organização de eventos, com interface fácil de usar para aumentar suas conversões e facilitar vendas.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    linkUrl: "/projetos/evente-set",
    isInternal: true,
  },
  {
    title: "Inova Tech",
    category: "Sistema de Gestão",
    description: "Sistema para assistência técnica de celulares, unindo cadastro de clientes, orçamentos rápidos e um módulo financeiro completo.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=2070&auto=format&fit=crop",
    linkUrl: "/projetos/inova-tech",
    isInternal: true,
  },
  {
    title: "LexControl",
    category: "Sistema Jurídico",
    description: "Plataforma de automação para o meio advocatício, lidando com honorários, acompanhamento processual e cobranças recorrentes.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    linkUrl: "/projetos/lexcontrol",
    isInternal: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Projects() {
  return (
    <section id="projetos" className="bg-slate-900 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-green-500">Portfólio</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Projetos que transformaram negócios
            </p>
          </div>
          <div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
            >
              Iniciar um projeto semelhante <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/20 transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-green-500/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-green-500 uppercase">
                    {project.category}
                  </span>
                  <Link
                    href={project.linkUrl}
                    className="text-slate-500 transition-colors hover:text-green-500"
                    title="Ver Detalhes do Projeto"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-100">
                  <Link href={project.linkUrl} className="focus:outline-none flex items-center gap-2 group/link hover:text-green-400 transition-colors">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
