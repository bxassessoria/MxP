import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Radio, Signal, Mic2, Tv, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

export default function BroadcastPage() {
  return (
    <Layout>
      {/* Hero SEO */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container max-w-4xl text-center">
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Glossário Media Portal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#263858] mb-6">Soluções para Broadcast</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Do playout à distribuição OTT: entenda como a tecnologia moderna está redefinindo as operações de emissoras de TV e Rádio.
          </p>
        </div>
      </div>

      {/* Conteúdo Educativo */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* O que é */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-4">O Futuro do Broadcast</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                O termo <strong>Broadcast</strong> tradicionalmente se refere à transmissão de sinal de TV ou Rádio via ondas eletromagnéticas (OTA). No entanto, o conceito evoluiu para abranger qualquer distribuição de conteúdo "um-para-muitos", incluindo streaming ao vivo, OTT e VOD.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As emissoras modernas enfrentam o desafio de manter a qualidade técnica da TV tradicional enquanto ganham a agilidade e o alcance das plataformas digitais.
              </p>
            </section>

            {/* Desafios e Soluções */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Desafios da Operação Moderna</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Signal className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Convergência IP</h3>
                  <p className="text-sm text-gray-500">A migração de cabos SDI para redes IP (SMPTE 2110) exige nova infraestrutura e know-how.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Globe className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Distribuição Multiplataforma</h3>
                  <p className="text-sm text-gray-500">Entregar o mesmo sinal para TV aberta, YouTube, Facebook e App próprio simultaneamente.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Tv className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Automação de Playout</h3>
                  <p className="text-sm text-gray-500">Reduzir custos operacionais automatizando a exibição de comerciais e programas gravados.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Mic2 className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Visual Radio</h3>
                  <p className="text-sm text-gray-500">Transformar estúdios de rádio em canais de TV automatizados com câmeras robóticas.</p>
                </div>
              </div>
            </section>

            {/* FAQ SEO */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold text-[#263858]">O que é Playout na Nuvem?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    É a capacidade de rodar o canal de TV inteiramente em servidores virtuais (AWS, Azure), eliminando a necessidade de uma sala de controle física cara e complexa.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold text-[#263858]">Como integrar Rádio e TV?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Com sistemas de automação que cortam as câmeras automaticamente baseados em quem está falando no microfone, permitindo que rádios virem canais de vídeo sem equipe extra.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-[#263858] text-white p-8 rounded-lg shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Sua TV na Nuvem</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Conheça o <strong>Gendai TV</strong>, a solução da Media Portal que integra ingest, gestão e exibição broadcast em uma única plataforma robusta.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Playout 24/7</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Grafismo Integrado</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Streaming Nativo</li>
              </ul>
              <Link href="/products/gendai-tv">
                <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold py-6 rounded shadow-lg">
                    Conhecer Gendai TV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
