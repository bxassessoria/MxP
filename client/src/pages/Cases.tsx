import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cases = [
  {
    client: "Canal UOL",
    title: "Gestão completa de acervo para jornalismo digital",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop",
    desc: "O Canal UOL precisava de uma solução ágil para indexar e recuperar milhares de horas de conteúdo jornalístico. Com o Media Portal, a produtividade da redação aumentou em 40%.",
    challenge: "Indexar 10 anos de acervo e integrar com sistema de edição em nuvem.",
    solution: "Implementação do CloudFly com reconhecimento facial e transcrição automática.",
    result: "Redução de 60% no tempo de busca de imagens de arquivo."
  },
  {
    client: "Rede TV!",
    title: "Modernização do fluxo de broadcast",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    desc: "A Rede TV! buscou a Media Portal para renovar seu parque de exibição e arquivamento, garantindo segurança e redundância para operação 24/7.",
    challenge: "Substituir sistema legado sem interromper a operação on-air.",
    solution: "Gems in a Box com redundância geográfica e playout automatizado.",
    result: "Zero downtime durante a migração e economia de 30% em manutenção."
  },
  {
    client: "TV Cultura",
    title: "Preservação de patrimônio histórico audiovisual",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=1974&auto=format&fit=crop",
    desc: "Um dos maiores acervos do Brasil foi digitalizado e organizado com a tecnologia Media Portal, garantindo a perpetuidade da memória televisiva nacional.",
    challenge: "Digitalizar fitas analógicas e catalogar metadados complexos.",
    solution: "Custom PRJ focado em digitalização massiva e enriquecimento de metadados.",
    result: "Mais de 50 mil horas de conteúdo preservadas e acessíveis online."
  },
  {
    client: "Igreja Universal",
    title: "Distribuição global de conteúdo religioso",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
    desc: "Gestão centralizada de cultos e programas para distribuição em centenas de países, com legendagem e dublagem integradas ao fluxo.",
    challenge: "Gerenciar versões de conteúdo em 10 idiomas diferentes.",
    solution: "CloudLink conectando sedes internacionais para troca rápida de arquivos.",
    result: "Sincronização global de conteúdo em menos de 2 horas após o evento ao vivo."
  }
];

export default function Cases() {
  return (
    <Layout>
      <div className="bg-[#263858] text-white py-24">
        <div className="container text-center max-w-4xl">
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Histórias de Sucesso</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quem confia na Media Portal</h1>
          <p className="text-xl text-gray-300">
            Descubra como ajudamos grandes empresas a superar desafios complexos de gestão de mídia.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#263858]/60 group-hover:bg-[#263858]/40 transition-colors flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-white font-bold uppercase text-sm tracking-wider">Ver Case Completo</span>
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                      {item.client}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex items-center text-[#EE6025] font-bold text-sm uppercase tracking-wider mt-auto group-hover:underline">
                      Ler História <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-[#263858] mb-2">{item.client}</DialogTitle>
                  <DialogDescription className="text-lg text-gray-600 font-medium">
                    {item.title}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-6">
                    <img src={item.image} alt={item.client} className="w-full h-64 object-cover rounded-lg shadow-sm" />
                    
                    <div className="grid md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <div>
                            <h4 className="font-bold text-[#EE6025] text-sm uppercase mb-2">Desafio</h4>
                            <p className="text-sm text-gray-700">{item.challenge}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#EE6025] text-sm uppercase mb-2">Solução</h4>
                            <p className="text-sm text-gray-700">{item.solution}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#EE6025] text-sm uppercase mb-2">Resultado</h4>
                            <p className="text-sm text-gray-700">{item.result}</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                        {item.desc} A implementação permitiu não apenas resolver o gargalo inicial, mas também abriu novas frentes de receita através da monetização do acervo organizado.
                    </p>

                    <Button className="w-full bg-[#263858] hover:bg-[#1a2840] text-white font-bold py-3">
                        Quero um resultado assim na minha empresa
                    </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#263858]">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Quais tipos de projetos vocês atendem?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Atendemos desde pequenas produtoras que precisam organizar seus arquivos em nuvem até grandes redes de televisão com operações complexas de 24 horas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Quanto tempo leva para ver resultados?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                A organização do acervo traz ganhos imediatos de produtividade. Em média, nossos clientes relatam uma redução de 40% no tempo de busca de arquivos já no primeiro mês de uso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Atendem outros segmentos além de TV?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim! Temos forte atuação em corporações (bancos, varejo), instituições de ensino (EAD), igrejas e setor público.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
