import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Image, FileText, Layers, Share2, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

export default function DAMPage() {
  return (
    <Layout>
      {/* Hero SEO */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container max-w-4xl text-center">
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Glossário Media Portal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#263858] mb-6">O que é DAM (Digital Asset Management)?</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubra como o gerenciamento de ativos digitais pode centralizar a comunicação da sua marca, garantindo consistência e agilidade para equipes de marketing e criação.
          </p>
        </div>
      </div>

      {/* Conteúdo Educativo */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* O que é */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-4">Definição de DAM</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DAM, ou <strong>Digital Asset Management</strong>, é um sistema centralizado para organizar, armazenar e distribuir ativos digitais de uma empresa. Isso inclui imagens, logotipos, documentos PDF, apresentações e vídeos institucionais.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O objetivo principal de um DAM é garantir que todos na organização usem a versão correta dos arquivos, protegendo a identidade da marca e acelerando a criação de campanhas.
              </p>
            </section>

            {/* Benefícios */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Por que sua empresa precisa de um DAM?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Layers className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Centralização Única</h3>
                  <p className="text-sm text-gray-500">O fim dos arquivos espalhados em e-mails, Google Drive e HDs externos. Tudo em um só lugar.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Share2 className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Compartilhamento Seguro</h3>
                  <p className="text-sm text-gray-500">Envie links expiráveis para agências e parceiros sem precisar dar acesso à sua rede interna.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Globe className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Acesso Global</h3>
                  <p className="text-sm text-gray-500">Equipes remotas acessam os mesmos arquivos com a mesma velocidade, de qualquer lugar.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <FileText className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Controle de Versão</h3>
                  <p className="text-sm text-gray-500">Nunca mais use "logo_final_v2_agora_vai.png". O sistema garante sempre a versão mais atual.</p>
                </div>
              </div>
            </section>

            {/* FAQ SEO */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Dúvidas Comuns sobre DAM</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold text-[#263858]">O DAM serve para vídeos pesados?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Sistemas DAM tradicionais focam em imagens e documentos. Para vídeos pesados e fluxos de TV, o ideal é um sistema híbrido ou um MAM dedicado, como o oferecido pela Media Portal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold text-[#263858]">Como funciona a busca?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Através de metadados. Cada arquivo recebe "tags" (autor, data, campanha, tipo) que facilitam encontrar exatamente o que você precisa em segundos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-[#263858] text-white p-8 rounded-lg shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-4">MAM ou DAM?</h3>
              <p className="text-gray-300 mb-6 text-sm">
                A Media Portal oferece soluções que unem o melhor dos dois mundos: a robustez do MAM para vídeos e a organização do DAM para arquivos corporativos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Gestão de Marca</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Portal de Mídia</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Distribuição Controlada</li>
              </ul>
              <Link href="/products/custom-prj">
                <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold py-6 rounded shadow-lg">
                    Falar com Consultor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
