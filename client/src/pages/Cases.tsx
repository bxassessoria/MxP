import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Quote } from "lucide-react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const cases = [
  {
    id: "uol",
    client: "Canal UOL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/UOL_logo.svg/2560px-UOL_logo.svg.png",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    title: "Gestão completa do acervo de jornalismo e entretenimento",
    desc: "Implementação do Media Portal MAM para centralizar a ingestão, catalogação e distribuição de conteúdo para TV e Web.",
    challenge: "O UOL precisava de uma solução robusta para gerenciar o volume crescente de vídeos gerados diariamente por sua redação e estúdios, integrando fluxos de publicação rápida para o portal e para o canal linear.",
    solution: "Implantamos o Media Portal em arquitetura híbrida, permitindo que editores acessem o acervo de qualquer lugar. A integração com sistemas de edição (Adobe Premiere) agilizou o corte e publicação de breaking news.",
    result: "Redução de 40% no tempo de busca de arquivos e aumento significativo na produtividade da equipe de vídeo."
  },
  {
    id: "redetv",
    client: "Rede TV!",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RedeTV%21.svg/1200px-RedeTV%21.svg.png",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop",
    title: "Digitalização e preservação do acervo histórico",
    desc: "Projeto de migração de fitas físicas para digital, com indexação automática e preservação de longo prazo.",
    challenge: "Milhares de horas de conteúdo histórico armazenadas em fitas magnéticas corriam risco de degradação. A emissora precisava digitalizar e tornar esse material acessível para reprises e novos programas.",
    solution: "Utilizamos o módulo de Ingest Automatizado do Media Portal, conectado a robôs de LTO. O sistema gerou proxies para visualização imediata e arquivou os arquivos em alta resolução em fitas de dados seguras.",
    result: "Acervo histórico 100% preservado e acessível digitalmente para os produtores da emissora."
  },
  {
    id: "gazeta",
    client: "TV Gazeta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TV_Gazeta_logo_2016.svg/1200px-TV_Gazeta_logo_2016.svg.png",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
    title: "Fluxo de produção jornalística integrado",
    desc: "Automação do fluxo de notícias, do recebimento de pautas à exibição no ar.",
    challenge: "A TV Gazeta buscava modernizar seu jornalismo, eliminando processos manuais e fitas físicas no fluxo diário de notícias.",
    solution: "Integração total do Media Portal com o sistema de NRCS (Newsroom Computer System). Jornalistas agora podem visualizar e editar matérias diretamente de suas estações de trabalho.",
    result: "Maior agilidade no fechamento dos jornais e eliminação total do uso de mídias físicas na redação."
  },
  {
    id: "almg",
    client: "Assembleia Legislativa de MG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bras%C3%A3o_de_Minas_Gerais.svg/1200px-Bras%C3%A3o_de_Minas_Gerais.svg.png",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974&auto=format&fit=crop",
    title: "Transparência e acesso público ao acervo legislativo",
    desc: "Portal de vídeos para acesso cidadão às sessões plenárias e comissões.",
    challenge: "Disponibilizar o vasto conteúdo gerado pelas sessões legislativas de forma organizada e pesquisável para o público e imprensa.",
    solution: "Criação de um portal público alimentado automaticamente pelo MAM Media Portal. As sessões são gravadas, catalogadas com metadados (oradores, temas) e publicadas instantaneamente.",
    result: "Democratização do acesso à informação legislativa com um portal de vídeo moderno e fácil de usar."
  }
];

export default function Cases() {
  return (
    <Layout>
      {/* HERO SECTION - PADRÃO HOME */}
      <section className="relative min-h-[90vh] flex items-center bg-[#263858] overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" 
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
              Quem confia na <span className="text-[#EE6025]">Media Portal</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Descubra como grandes emissoras e empresas de mídia transformaram seus fluxos de trabalho com nossa tecnologia.
            </p>
            <div className="h-1 w-20 bg-[#EE6025] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CASES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            {cases.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263858]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white w-full font-bold">
                          Ler Case Completo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-white border-none p-0 overflow-hidden">
                        <div className="h-48 bg-[#263858] relative">
                            <img src={item.image} className="w-full h-full object-cover opacity-40" />
                            <div className="absolute bottom-6 left-8">
                                <img src={item.logo} className="h-12 w-auto bg-white/90 p-2 rounded mb-4" />
                                <DialogTitle className="text-2xl font-bold text-white">{item.client}</DialogTitle>
                            </div>
                        </div>
                        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div>
                                <h3 className="text-[#EE6025] font-bold uppercase tracking-wide text-sm mb-2">O Desafio</h3>
                                <p className="text-gray-700 leading-relaxed">{item.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-[#EE6025] font-bold uppercase tracking-wide text-sm mb-2">A Solução</h3>
                                <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#EE6025]">
                                <h3 className="text-[#263858] font-bold uppercase tracking-wide text-sm mb-2">Resultados</h3>
                                <p className="text-gray-700 font-medium">{item.result}</p>
                            </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="h-12 mb-6">
                    <img src={item.logo} alt={item.client} className="h-full w-auto object-contain object-left" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#263858] mb-4 group-hover:text-[#EE6025] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-[#EE6025] font-bold text-sm uppercase tracking-wide">
                    Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#263858] text-white text-center">
        <div className="container max-w-3xl">
          <Quote className="mx-auto text-[#EE6025] mb-8 opacity-50" size={64} />
          <h2 className="text-4xl font-bold mb-6">Pronto para escrever sua história de sucesso?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Junte-se aos maiores players do mercado e transforme a gestão do seu acervo.
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold text-lg px-10 py-6 h-auto rounded shadow-xl hover:scale-105 transition-transform">
              Agendar Consultoria Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
