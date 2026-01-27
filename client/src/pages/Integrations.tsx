import Layout from "@/components/Layout";
import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Definição das categorias
const categories = [
  "Todos",
  "Cloud & Storage",
  "Broadcast Hardware",
  "Edição & Post",
  "Infraestrutura IT",
  "Outros"
];

// Helper para categorizar e buscar logos
const getPartnerInfo = (name: string) => {
  const n = name.toLowerCase();
  let logoDomain = `${n.replace(/\s/g, '')}.com`;
  
  // Ajustes manuais de domínio para logos mais precisos
  if (n.includes("aws")) logoDomain = "aws.amazon.com";
  if (n.includes("google")) logoDomain = "cloud.google.com";
  if (n.includes("azure")) logoDomain = "azure.microsoft.com";
  if (n.includes("sony")) logoDomain = "sony.com";
  if (n.includes("canon")) logoDomain = "canon.com";
  if (n.includes("adobe")) logoDomain = "adobe.com";
  if (n.includes("avid")) logoDomain = "avid.com";
  if (n.includes("dell")) logoDomain = "dell.com";
  if (n.includes("hp")) logoDomain = "hp.com";
  if (n.includes("ibm")) logoDomain = "ibm.com";
  
  const logoUrl = `https://logo.clearbit.com/${logoDomain}`;

  if (n.includes("aws") || n.includes("google") || n.includes("azure") || n.includes("cloud") || n.includes("dropbox") || n.includes("blackbaze") || n.includes("owncloud")) {
    return { category: "Cloud & Storage", logo: logoUrl };
  }
  if (n.includes("sony") || n.includes("canon") || n.includes("panasonic") || n.includes("grass") || n.includes("harmonic") || n.includes("pebble") || n.includes("telestream") || n.includes("tektronix") || n.includes("orad") || n.includes("qualstar")) {
    return { category: "Broadcast Hardware", logo: logoUrl };
  }
  if (n.includes("adobe") || n.includes("avid") || n.includes("apple") || n.includes("final") || n.includes("edit") || n.includes("cinegy") || n.includes("main concept")) {
    return { category: "Edição & Post", logo: logoUrl };
  }
  if (n.includes("dell") || n.includes("hp") || n.includes("ibm") || n.includes("quantum") || n.includes("hitachi") || n.includes("supermicro") || n.includes("vmware") || n.includes("xen") || n.includes("hyper-v")) {
    return { category: "Infraestrutura IT", logo: logoUrl };
  }
  return { category: "Outros", logo: logoUrl };
};

const partnerNames = [
  "Pebble", "Telestream", "Sony", "Tektronix", "IPV", "Harris", "Harmonic",
  "Edit Share", "Seachange", "AP News", "SNews", "Quantum", "Orad", "Qualstar",
  "AWS", "Google Cloud", "Fujitsu", "MDotti", "Embratel", "Grass Valley",
  "Apptek", "MOG", "4S", "Cinegy", "Dell", "IBM", "Hitachi", "HP", "Apple",
  "Supermicro", "VMware", "Xen", "Hyper-V", "Vimeo", "YouTube", "BlackBaze",
  "Owncloud", "DropBox", "Front Porch", "Floripa Tecnologia", "Voice Interaction",
  "Rohde & Schwarz", "Overland Tandberg", "Main Concept"
];

// Gerar lista de parceiros
const partners = partnerNames.map(name => {
  const info = getPartnerInfo(name);
  return {
    name,
    ...info
  };
}).sort((a, b) => a.name.localeCompare(b.name));

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = activeCategory === "Todos" || partner.category === activeCategory;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const integrationFAQs = [
    {
      question: "O Media Portal integra com Adobe Premiere?",
      answer: "Sim, possuímos um painel nativo para Adobe Premiere Pro que permite aos editores buscar, importar e exportar conteúdo do MAM sem sair da interface de edição."
    },
    {
      question: "É possível integrar com sistemas de arquivamento em fita (LTO)?",
      answer: "Sim, suportamos integração com bibliotecas de fitas LTO através de middlewares de mercado (como XenData e Front Porch) ou drivers nativos, gerenciando o ciclo de vida do conteúdo entre disco e fita."
    },
    {
      question: "Vocês possuem API aberta?",
      answer: "Sim, o Media Portal disponibiliza uma API RESTful completa e documentada, permitindo que sua equipe de desenvolvimento crie integrações customizadas, automações e workflows específicos."
    },
    {
      question: "Como funciona a integração com Cloud Storage (S3)?",
      answer: "O sistema trata buckets S3 (AWS, Google, Azure) como volumes de armazenamento nativos, permitindo mover, copiar e arquivar mídia para a nuvem de forma transparente para o usuário final."
    }
  ];

  return (
    <Layout>
      {/* HERO SECTION - CONSISTENTE COM CASES */}
      <section className="relative min-h-screen flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Integrações" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10 pt-20">
          <Link href="/">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-8 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
            </Button>
          </Link>

          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Conectividade Total
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Nossas <span className="text-[#EE6025]">Integrações</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              O Media Portal se conecta nativamente com as principais tecnologias do mercado broadcast e TI para unificar seu fluxo de trabalho.
            </p>

            {/* Search Bar no Hero */}
            <div className="relative max-w-lg">
                <input 
                    type="text" 
                    placeholder="Buscar parceiro..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-[#EE6025] focus:bg-white/20 outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS GRID SECTION */}
      <section className="py-24 bg-white">
        <div className="container">
          
          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all
                  ${activeCategory === cat 
                    ? "bg-[#263858] text-white shadow-lg scale-105" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-[#263858]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PARTNERS GRID - ESTILO CASES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPartners.map((partner, idx) => (
              <div 
                key={idx}
                className="group relative bg-white border border-gray-100 rounded-xl p-8 flex items-center justify-center aspect-[4/3] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                {/* LOGO */}
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                    }}
                    className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 group-hover:scale-110"
                  />
                ) : null}
                
                {/* Fallback text if no logo */}
                <span className={`fallback-text text-xl font-bold text-gray-400 group-hover:text-[#263858] ${partner.logo ? 'hidden' : ''}`}>
                    {partner.name}
                </span>

                {/* HOVER OVERLAY - SIMPLIFICADO (SEM BOTÃO VER DETALHES) */}
                <div className="absolute inset-0 bg-[#263858]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <h3 className="text-white font-bold text-lg mb-2">{partner.name}</h3>
                  <span className="text-[#EE6025] text-sm font-bold uppercase tracking-wider">{partner.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPartners.length === 0 && (
            <div className="text-center py-20">
               <p className="text-gray-400 text-lg">Nenhum parceiro encontrado nesta categoria.</p>
            </div>
          )}

        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection items={integrationFAQs} title="Dúvidas sobre Integração" subtitle="Conectividade é o nosso forte" />

      {/* CTA SECTION */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263858] mb-6">
            Não encontrou sua ferramenta?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Nossa arquitetura aberta permite o desenvolvimento rápido de novos drivers e conectores. Fale com nossa engenharia.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#EE6025] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#d94e15] transition-transform hover:scale-105 shadow-lg"
          >
            Solicitar Integração
          </a>
        </div>
      </section>
    </Layout>
  );
}
