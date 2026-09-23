"use client";

import { motion } from "framer-motion";
import { Server, Zap, Blocks, Cloud, Wrench, Monitor } from "lucide-react";

const services = [
  {
    title: "Sistemas Sob Medida",
    description: "Criamos plataformas exclusivas para o seu negócio, automatizando processos e eliminando planilhas manuais.",
    icon: Server,
  },
  {
    title: "Lançamento Rápido (MVP)",
    description: "Tiramos a sua ideia do papel em tempo recorde para você testar no mercado e começar a gerar resultados rápido.",
    icon: Zap,
  },
  {
    title: "Integração de Ferramentas",
    description: "Conectamos os sistemas que você já usa (CRMs, ERPs) para que as informações conversem entre si sem retrabalho.",
    icon: Blocks,
  },
  {
    title: "Manutenção de Computadores",
    description: "Realizamos orçamentos detalhados, consertos e manutenções preventivas para a sua empresa nunca parar.",
    icon: Wrench,
  },
  {
    title: "Suporte de TI para Empresas",
    description: "Cuidamos da sua rede, servidores e computadores com atendimento especializado e rápido.",
    icon: Monitor,
  },
  {
    title: "Sistemas na Nuvem",
    description: "Hospedamos e blindamos seus sistemas na internet com segurança de banco, para você acessar de onde estiver.",
    icon: Cloud,
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

export function Services() {
  return (
    <section id="servicos" className="bg-slate-900 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-500">Nossas Soluções</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Tudo o que sua empresa precisa para escalar
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Combinamos engenharia de ponta com um design limpo para entregar produtos digitais eficientes e seguros.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-800/20 p-8 backdrop-blur-sm transition-colors hover:border-slate-700 hover:bg-slate-800/40"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <service.icon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
