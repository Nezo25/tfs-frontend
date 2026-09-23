import Link from "next/link";
import Image from "next/image";
import { Code2, Briefcase, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-green-500/20 bg-slate-800">
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
            <p className="text-sm leading-6 text-slate-400 max-w-xs">
              Transformando ideias em software de alta performance. 
              Especialistas em back-end, infraestrutura e arquitetura de dados.
            </p>
            <div className="flex gap-x-5">
              <a href="https://instagram.com/treefrogsystem_tfs" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-green-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Briefcase className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-green-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-100">Soluções</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#servicos" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">Backend de Alta Performance</a>
                  </li>
                  <li>
                    <a href="#servicos" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">MVPs Ágeis</a>
                  </li>
                  <li>
                    <a href="#servicos" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">Arquitetura Cloud</a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-100">Empresa</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#metodologia" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">Nossa Metodologia</a>
                  </li>
                  <li>
                    <a href="#projetos" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">Portfólio</a>
                  </li>
                  <li>
                    <a href="#contato" className="text-sm leading-6 text-slate-400 hover:text-green-400 transition-colors">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/60 pt-8 sm:mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} Tree Frog Systems. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Termos de Uso</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
