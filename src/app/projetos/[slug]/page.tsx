import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe, Code2 } from "lucide-react";

// Simulando um banco de dados para os projetos
const projectsData = {
  "evente-set": {
    title: "Evente Set",
    category: "Plataforma de Eventos",
    description: "Plataforma inteligente de gestão de eventos, com RSVP simplificado, check-in digital e mapeamento de mesas.",
    fullDescription: "A Evente Set substitui planilhas manuais por uma plataforma completa para organizadores. Conta com RSVP simplificado via links seguros, Mapeador Visual de Assentos (Seating Manager) para organizar mesas, módulo de check-in digital em tempo real para a recepção, e controle detalhado de cardápio cruzando preferências e restrições alimentares dos convidados.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    linkUrl: "https://github.com/Nezo25/evente-set-frontend",
    isGithub: true,
    benefits: [
      "RSVP Seguro (Links únicos criptografados)",
      "Gestão Visual de Mesas e Assentos",
      "Check-in digital instantâneo via dashboard",
      "Controle de cardápio e restrições alimentares"
    ]
  },
  "inova-tech": {
    title: "Inova Tech",
    category: "Sistema de Gestão",
    description: "Sistema para assistência técnica de celulares, unindo cadastro de clientes, orçamentos rápidos e um módulo financeiro completo.",
    fullDescription: "A Inova Tech revolucionou a forma como assistências técnicas gerenciam suas ordens de serviço. Construímos uma plataforma que unifica o cadastro de clientes, geração de orçamentos e controle financeiro. O resultado é menos tempo gasto com burocracia e planilhas, e mais foco em atender os clientes e faturar.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=2070&auto=format&fit=crop",
    linkUrl: "https://inova-tech-frontend.vercel.app",
    isGithub: false,
    benefits: [
      "Controle ágil de ordens de serviço",
      "Geração de orçamentos em 1 clique",
      "Módulo financeiro (contas a pagar e receber)",
      "Histórico completo de clientes e aparelhos"
    ]
  },
  "lexcontrol": {
    title: "LexControl",
    category: "Sistema Jurídico",
    description: "Plataforma de automação para o meio advocatício, lidando com honorários, acompanhamento processual e cobranças recorrentes.",
    fullDescription: "LexControl é a solução definitiva para escritórios de advocacia que precisam de controle total. A plataforma automatiza cálculos de honorários de sucumbência, gerencia cobranças recorrentes de clientes e organiza toda a esteira processual com extrema segurança dos dados.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    linkUrl: "https://github.com/Nezo25/lexcontrol-api",
    isGithub: true,
    benefits: [
      "Cálculo automatizado de honorários e sucumbência",
      "Automação de cobranças recorrentes",
      "Segurança de ponta a ponta (Criptografia)",
      "Gestão inteligente de processos e prazos"
    ]
  }
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link href="/#projetos" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-green-500 transition-colors">
            <ArrowLeft size={16} /> Voltar para o Portfólio
          </Link>
        </div>

        {/* Hero do Projeto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          <div>
            <span className="inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500 mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {project.fullDescription}
            </p>
            
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-green-400"
            >
              {project.isGithub ? <Code2 size={20} /> : <Globe size={20} />}
              {project.isGithub ? "Visualizar Código Fonte" : "Acessar Plataforma"}
            </a>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-green-500/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Benefícios */}
        <div className="bg-slate-800/20 border border-slate-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">Resultados & Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Precisa de um sistema como esse?</h2>
          <Link href="/#contato" className="inline-flex h-12 items-center justify-center rounded-md bg-slate-100 px-8 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 focus:ring-offset-slate-900">
            Fale com nossos especialistas
          </Link>
        </div>

      </div>
    </div>
  );
}
