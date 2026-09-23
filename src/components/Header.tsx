"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Metodologia", href: "#metodologia" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-green-500/20 bg-slate-800 flex-shrink-0">
                <Image 
                  src="/logo.jpg" 
                  alt="Tree Frog Systems Logo" 
                  fill 
                  className="object-cover object-center" 
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-100">
                Tree Frog Systems
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-green-500"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contato"
              className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Falar com Engenheiro
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-slate-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 bg-slate-900"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-green-500"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <a
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-md bg-green-500 px-4 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-green-400"
                >
                  Falar com Engenheiro
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
