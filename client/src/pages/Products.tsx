import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Box, Link as LinkIcon, Settings, Tv, Newspaper, Database, Layers, FolderTree, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
  {
    id: "cloudfly",
    title: "CloudFly",
    desc: "Gestão e processamento de acervo digital 100% em nuvem, permitindo visualização em baixa resolução e download da mídia mezanino.",
    icon: <Cloud className="w-12 h-12 text-[#EE6025] mb-4" />,
    link: "/products/cloudfly",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "gems-in-a-box",
    title: "Gems in a Box",
    desc: "Projetos com infraestrutura on-premises dimensionados de acordo com a carga de conteúdo arquivado.",
    icon: <Box className="w-12 h-12 text-[#EE6025] mb-4" />,
    link: "/products/gems-in-a-box",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cloudlink",
    title: "CloudLink",
    desc: "Solução híbrida para gestão de conteúdo digital, unindo cloud computing e infraestrutura on-premises.",
    icon: <LinkIcon className="w-12 h-12 text-[#EE6025] mb-4" />,
    link: "/products/cloudlink",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "custom-prj",
    title: "Custom PRJ",
    desc: "Projetos customizados com aproveitamento da infraestrutura existente para potencializar o poder do seu conteúdo.",
    icon: <Settings className="w-12 h-12 text-[#EE6025] mb-4" />,
    link: "/products/custom-prj",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-tv",
    title: "Gendai TV",
    desc: "Gestão de fluxo completo de produção com ingest, distribuição (broadband) e exibição (broadcast).",
    icon: <Tv className="w-12 h-12 text-[#EE6025] mb-4" />,
    link: "/products/gendai-tv",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gendai-news",
    title: "Gendai News",
    desc: "Gestão de produção televisiva e jornalística, integrando ingest, jornalismo, distribuição e exibição.",
    icon: <Newspaper className="w-12 h-12 text-[#EE6025] mb-4" />,
    link: "/products/gendai-news",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  }
];

const categories = [
  { title: "MAM", subtitle: "Media Asset Management", desc: "Gestão completa do ciclo de vida dos seus vídeos e áudios.", icon: <Layers size={32} /> },
  { title: "PAM", subtitle: "Production Asset Management", desc: "Controle de fluxo de trabalho para equipes de produção.", icon: <FolderTree size={32} /> },
  { title: "DAM", subtitle: "Digital Asset Management", desc: "Organização centralizada de todos os ativos digitais da empresa.", icon: <Database size={32} /> },
];

export default function Products() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white py-24 relative overflow-hidden">
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Portfólio Completo</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Soluções para Gestão de Mídia</h1>
            <p className="text-xl text-gray-300">
              Tecnologia escalável para transformar seu acervo em oportunidades de negócio.
            </p>
          </div>
          {/* Visual Element Right */}
          <div className="hidden md:block">
            <div className="w-64 h-64 bg-[#EE6025]/10 rounded-full flex items-center justify-center border border-[#EE6025]/20 animate-pulse-slow">
              <Database className="w-32 h-32 text-[#EE6025]" />
            </div>
          </div>
        </div>
      </div>

      {/* MAM / PAM / DAM Cards */}
      <div className="container -mt-16 relative z-20 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded shadow-lg border-t-4 border-[#EE6025] hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[#263858] mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-[#263858]">{cat.title}</h3>
              <div className="text-[#EE6025] font-bold text-sm uppercase mb-3">{cat.subtitle}</div>
              <p className="text-gray-600">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#263858]">Nossos Produtos</h2>
          <p className="text-gray-600">Conheça as ferramentas que impulsionam os maiores players do mercado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.link}>
              <a className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#EE6025] hover:shadow-xl transition-all flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#263858]/60 group-hover:bg-[#263858]/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-6 bg-white p-2 rounded shadow-sm">
                    {product.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{product.desc}</p>
                  <div className="flex items-center text-[#EE6025] font-bold text-sm uppercase tracking-wider mt-auto group-hover:underline">
                    Ver Detalhes <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#263858]">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">O que é Media Asset Management (MAM)?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                MAM é um sistema que gerencia o armazenamento, indexação e recuperação de arquivos de mídia (vídeo, áudio, imagens). Ele permite que emissoras e empresas organizem grandes volumes de conteúdo de forma eficiente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Qual a diferença entre CloudFly e CloudLink?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                O CloudFly é 100% nuvem, ideal para operações remotas e distribuídas. O CloudLink é híbrido, mantendo uma cópia local de alta performance sincronizada com a nuvem para backup e acesso externo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">O sistema integra com Adobe Premiere?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, todas as nossas soluções possuem integração nativa com Adobe Premiere, permitindo que editores acessem o acervo diretamente da timeline de edição.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#263858] py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para otimizar seu fluxo?</h2>
          <p className="text-gray-300 mb-8">
            Fale com nossos especialistas e descubra qual solução se adapta melhor à sua necessidade.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-2xl text-left">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                <input type="text" className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail Corporativo</label>
                <input type="email" className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none" placeholder="seu@empresa.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea className="w-full border border-gray-300 rounded p-3 focus:border-[#EE6025] outline-none h-32" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold py-4 text-lg rounded">
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
