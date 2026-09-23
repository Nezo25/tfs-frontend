"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="bg-slate-900 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-green-500">Contato</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Vamos construir algo incrível juntos
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Estamos prontos para entender os desafios do seu negócio e desenhar a solução ideal.
              Preencha o formulário ou entre em contato diretamente pelos nossos canais.
            </p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-300">
              <div className="flex gap-x-4 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Telefone</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                    <Phone className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                </dt>
                <dd>
                  <a className="hover:text-green-400 transition-colors" href="tel:+5511999999999">
                    +55 (11) 99999-9999
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                    <Mail className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                </dt>
                <dd>
                  <a className="hover:text-green-400 transition-colors" href="mailto:contato@treefrogsystems.com">
                    contato@treefrogsystems.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Endereço</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                    <MapPin className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                </dt>
                <dd>São Paulo, SP - Brasil</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <form action="#" method="POST" className="flex flex-col gap-y-6 rounded-2xl bg-slate-800/40 p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-100">
                    Nome Completo
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 bg-slate-900/50 px-3.5 py-2 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-100">
                    E-mail
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-slate-900/50 px-3.5 py-2 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-100">
                    Sobre o Projeto
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-slate-900/50 px-3.5 py-2 text-slate-100 shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 transition-colors resize-none"
                      placeholder="Descreva brevemente o que você precisa..."
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-green-500 px-3.5 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
