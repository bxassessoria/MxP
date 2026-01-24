import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Monitor, Cloud, Video, Database, Settings, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const partners = [
  {
    category: "Edição e Pós-Produção",
    icon: <Monitor size={32} />,
    items: [
      { name: "Adobe Premiere Pro", desc: "Integração nativa via painel extension para acesso direto ao acervo.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png" },
      { name: "Avid Media Composer", desc: "Conexão via API para troca de metadados e arquivos MXF.", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Avid_Technology_logo.svg" },
      { name: "DaVinci Resolve", desc: "Fluxo de color grading integrado com round-trip automático.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/600px-DaVinci_Resolve_Studio.png" }
    ]
  },
  {
    category: "Cloud & Storage",
    icon: <Cloud size={32} />,
    items: [
      { name: "AWS S3 & Glacier", desc: "Armazenamento escalável com políticas de lifecycle automáticas.", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Google Cloud Storage", desc: "Integração para backup e análise de vídeo via Video Intelligence API.", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
      { name: "Microsoft Azure", desc: "Hospedagem segura e serviços cognitivos de mídia.", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" }
    ]
  },
  {
    category: "Transcodificação & IA",
    icon: <Video size={32} />,
    items: [
      { name: "FFmpeg", desc: "Motor de transcodificação robusto para todos os formatos de mercado.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/FFmpeg_icon.svg/1200px-FFmpeg_icon.svg.png" },
      { name: "Telestream Vantage", desc: "Automação de workflows complexos de mídia.", logo: "https://www.telestream.net/images/home/logo-telestream.png" },
      { name: "Google Video Intelligence", desc: "Extração automática de metadados, OCR e reconhecimento facial.", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" }
    ]
  }
];

export default function Integrations() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#263858] text-white py-24">
        <div className="container text-center max-w-4xl">
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Ecossistema Conectado</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Integrações Nativas</h1>
          <p className="text-xl text-gray-300">
            Conecte o Media Portal às ferramentas que você já usa e potencialize sua produtividade.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="container py-20">
        {partners.map((section, idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
              <div className="bg-[#EE6025]/10 p-3 rounded-lg text-[#EE6025]">
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold text-[#263858]">{section.category}</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-[#EE6025] hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center text-center h-full">
                      <div className="h-20 flex items-center justify-center mb-6 w-full">
                        <img src={item.logo} alt={item.name} className="max-h-16 max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-[#263858] mb-2">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2">{item.desc}</p>
                      <span className="text-[#EE6025] text-sm font-bold uppercase tracking-wider mt-auto flex items-center gap-2 group-hover:underline">
                        Saiba Mais <ArrowRight size={14} />
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <div className="flex justify-center mb-6">
                         <img src={item.logo} alt={item.name} className="h-16 object-contain" />
                      </div>
                      <DialogTitle className="text-2xl font-bold text-[#263858] text-center">{item.name}</DialogTitle>
                      <DialogDescription className="text-center pt-4 text-gray-600 text-lg leading-relaxed">
                        {item.desc}
                        <br/><br/>
                        A integração permite fluxo bidirecional de dados, garantindo que metadados inseridos no Media Portal estejam disponíveis instantaneamente na ferramenta parceira.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-[#263858] mb-4 flex items-center gap-2"><Settings size={18} /> Benefícios Técnicos</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-[#EE6025]" /> API RESTful completa</li>
                            <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-[#EE6025]" /> Sincronização em tempo real</li>
                            <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={14} className="text-[#EE6025]" /> Autenticação segura OAuth2</li>
                        </ul>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold w-full">Solicitar Documentação da API</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* API Section */}
      <div className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#263858] mb-6">API Aberta para Desenvolvedores</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Nossa arquitetura foi desenhada para ser extensível. Utilize nossa API RESTful documentada para criar fluxos customizados, integrar com sistemas legados ou desenvolver novos produtos sobre nossa plataforma.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-[#263858] text-white hover:bg-[#1a2840]">Ler Documentação</Button>
                        <Button variant="outline" className="border-[#263858] text-[#263858]">Obter Chave de API</Button>
                    </div>
                </div>
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-xl font-mono text-sm text-green-400 overflow-hidden">
                    <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">mediaPortal</span> = <span className="text-yellow-400">require</span>('mediaportal-sdk');</p>
                    <br/>
                    <p><span className="text-gray-400">// Ingest a new asset</span></p>
                    <p><span className="text-purple-400">await</span> mediaPortal.assets.<span className="text-yellow-400">create</span>(&#123;</p>
                    <p className="pl-4">file: <span className="text-orange-400">'video_final.mp4'</span>,</p>
                    <p className="pl-4">metadata: &#123;</p>
                    <p className="pl-8">title: <span className="text-orange-400">'Campanha 2026'</span>,</p>
                    <p className="pl-8">tags: [<span className="text-orange-400">'promo'</span>, <span className="text-orange-400">'institucional'</span>]</p>
                    <p className="pl-4">&#125;</p>
                    <p>&#125;);</p>
                    <br/>
                    <p><span className="text-gray-400">// Output: Asset ID 9384 created successfully.</span></p>
                </div>
            </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container py-20 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#263858]">Dúvidas sobre Integração</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Preciso pagar extra pelas integrações?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                As integrações nativas (Adobe, AWS, etc.) já estão inclusas nos planos Enterprise. Desenvolvimentos customizados podem ter custos adicionais de consultoria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold text-[#263858]">Vocês dão suporte ao time de TI?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, oferecemos suporte técnico dedicado para auxiliar sua equipe de TI durante a implementação e manutenção das integrações via API.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
    </Layout>
  );
}
