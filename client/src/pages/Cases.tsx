import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Client {
  name: string;
  logo: string;
  category: string;
  hasCase?: boolean;
  slug?: string;
  title?: string;
}

// Definição das categorias
const categories = [
  "Todos",
  "TV",
  "TV Pública",
  "TV Igreja",
  "Esportes",
  "Rádio",
  "Órgão Público",
  "Educação"
];

// Dados estáticos de clientes (apenas logos)
const staticClients: Client[] = [
  { name: "TV Cultura", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-01.jpg", category: "TV Pública" },
  { name: "Rádio Cultura Brasil", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-18.jpg", category: "Rádio" },
  { name: "EPTV", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/EPTV_ok.jpg", category: "TV" },
  { name: "TV Centro América", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/centro-pb.jpg", category: "TV" },
  { name: "TV Tem", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-06.jpg", category: "TV" },
  { name: "TV Novo Tempo", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-03_c.jpg", category: "TV Igreja" },
  { name: "TV Morena", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/morena-pb.jpg", category: "TV" },
  { name: "TV Câmara São Paulo", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/saopaulo_case.jpg", category: "Órgão Público" },
  { name: "TV Assembleia CE", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/TVALCEBW.png", category: "Órgão Público" },
  { name: "TV Serra Dourada", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-04.jpg", category: "TV" },
  { name: "Traffic Sports", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/traffic-sports.jpg", category: "Esportes" },
  { name: "TV Costa Norte", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/costa-norte2.png", category: "TV" },
  { name: "TV Câmara SJC", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/saojose.jpg", category: "Órgão Público" },
  { name: "Instituto Embratel", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/instituto-embratel.jpg", category: "Educação" },
  { name: "Sports+", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-24.jpg", category: "Esportes" },
  { name: "Arca Media", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logo-arca-media.jpg", category: "TV Igreja" },
  { name: "Igreja Adventista", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-21.jpg", category: "TV Igreja" },
  { name: "MTV", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-27.jpg", category: "TV" },
  { name: "TV Rá Tim Bum", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-22.jpg", category: "TV" },
  { name: "Embrapa", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-19.jpg", category: "Órgão Público" },
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [dynamicCases, setDynamicCases] = useState<any[]>([]);

  useEffect(() => {
    // Busca cases criados no admin
    fetch("/api/cases.php")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setDynamicCases(data);
      })
      .catch(() => console.log("Erro ao carregar cases dinâmicos (esperado localmente)"));
  }, []);

  // Mescla clientes estáticos com cases dinâmicos
  // Se houver um case dinâmico com mesmo nome de cliente estático, o dinâmico prevalece (pois tem link)
  const mergedList: Client[] = [...staticClients];

  // Adiciona ou atualiza com cases dinâmicos
  dynamicCases.forEach(dCase => {
    const existingIndex = mergedList.findIndex(c => c.name.toLowerCase() === dCase.client.toLowerCase());
    
    const caseObj = {
      name: dCase.client,
      logo: dCase.logo || "/images/default-logo.png", // Fallback logo
      category: "TV", // Categoria padrão se não tiver
      hasCase: true,
      slug: dCase.slug,
      title: dCase.title
    };

    if (existingIndex >= 0) {
      // Atualiza existente para ter o link do case
      mergedList[existingIndex] = { ...mergedList[existingIndex], ...caseObj, category: mergedList[existingIndex].category };
    } else {
      // Adiciona novo cliente com case
      mergedList.unshift(caseObj);
    }
  });

  const filteredCases = activeCategory === "Todos" 
    ? mergedList 
    : mergedList.filter(c => c.category === activeCategory);

  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME */}
      <section className="relative min-h-screen flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
               alt="Background Cases" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#263858] to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl">
            <div className="inline-block bg-[#EE6025] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white">
              Histórias de Sucesso
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Nossos <span className="text-[#EE6025]">Cases</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Descubra como grandes empresas de mídia transformaram seus fluxos de trabalho com as soluções Media Portal.
            </p>
          </div>
        </div>
      </section>

      {/* CASES GRID SECTION */}
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

          {/* LOGOS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredCases.map((client, idx) => (
              <div 
                key={idx}
                className="group relative bg-white border border-gray-100 rounded-xl p-8 flex items-center justify-center aspect-[4/3] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                {/* CASE FLAG */}
                {client.hasCase && (
                  <div className="absolute top-0 right-0 bg-[#EE6025] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 shadow-md">
                    CASE
                  </div>
                )}

                {/* LOGO */}
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-[80%] max-h-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                />

                {/* HOVER OVERLAY FOR "CASE" ITEMS */}
                {client.hasCase && (
                  <div className="absolute inset-0 bg-[#263858]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white font-bold text-lg mb-2">{client.name}</h3>
                    <span className="text-[#EE6025] text-sm font-bold uppercase tracking-wider mb-4">{client.category}</span>
                    {client.slug && (
                      <Link href={`/cases/${client.slug}`}>
                        <button className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-[#EE6025] pb-1 hover:text-[#EE6025] transition-colors cursor-pointer">
                          Ler Case Completo <ArrowRight size={14} />
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredCases.length === 0 && (
             <div className="text-center py-20">
                <p className="text-gray-400 text-lg">Nenhum case encontrado nesta categoria.</p>
             </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263858] mb-6">
            Pronto para ser nosso próximo case de sucesso?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Junte-se às maiores empresas de mídia do Brasil e transforme sua gestão de conteúdo.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#EE6025] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-[#d94e15] transition-transform hover:scale-105 shadow-lg"
          >
            Falar com um Consultor
          </a>
        </div>
      </section>
    </Layout>
  );
}
