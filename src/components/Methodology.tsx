"use client";

import { motion } from "framer-motion";
import { Code, ShieldCheck, Rocket, GitMerge } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Entendimento & Planejamento",
    description: "Mapeamos todas as necessidades do seu negócio e desenhamos a solução ideal antes de escrever qualquer linha de código.",
    icon: GitMerge,
  },
  {
    id: "02",
    name: "Desenvolvimento Ágil",
    description: "Entregamos partes do sistema funcionando rapidamente para você acompanhar a evolução e já começar a usar na sua empresa.",
    icon: Rocket,
  },
  {
    id: "03",
    name: "Qualidade Absoluta",
    description: "Construímos softwares que não travam, são fáceis de usar e estão preparados para crescer junto com o seu número de clientes.",
    icon: Code,
  },
  {
    id: "04",
    name: "Segurança de Dados",
    description: "Protegemos as informações financeiras e cadastrais do seu negócio seguindo os mais rigorosos padrões de segurança do mercado.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function Methodology() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-green-500 to-slate-800 opacity-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-500">Nossa Metodologia</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Como construímos software de excelência
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Trabalhamos com os mais altos padrões da engenharia de software para garantir 
            que seu sistema seja rápido, seguro e pronto para escalar.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {steps.map((step) => (
              <motion.div key={step.name} variants={itemVariants} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-100">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 ring-1 ring-inset ring-green-500/20">
                    <step.icon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-6 left-2 text-sm font-bold text-slate-700/50">
                    {step.id}
                  </span>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-300">
                  {step.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
