import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Search, Database, Lock, Clock, BarChart3 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

export default function MAMPage() {
  return (
    <Layout>
      {/* Hero SEO */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container max-w-4xl text-center">
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Glossário Media Portal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#263858] mb-6">O que é MAM (Media Asset Management)?</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Entenda como o gerenciamento de ativos de mídia pode revolucionar a produtividade da sua emissora ou produtora, organizando arquivos e automatizando fluxos de trabalho.
          </p>
        </div>
      </div>

      {/* Conteúdo Educativo */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* O que é */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-4">Definição de MAM</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MAM, sigla para <strong>Media Asset Management</strong>, é uma tecnologia projetada para armazenar, organizar e recuperar arquivos de mídia digital (vídeos, áudios, imagens) de forma eficiente. Diferente de um simples armazenamento em nuvem, um sistema MAM gerencia metadados ricos, permitindo buscas complexas e automação de tarefas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Para emissoras de TV e produtoras, o MAM é o "cérebro" da operação, conectando a ingestão do conteúdo bruto até a sua distribuição final.
              </p>
            </section>

            {/* Benefícios */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Principais Benefícios</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Search className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Busca Instantânea</h3>
                  <p className="text-sm text-gray-500">Encontre qualquer arquivo em segundos usando palavras-chave, datas ou reconhecimento facial.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Clock className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Automação de Workflow</h3>
                  <p className="text-sm text-gray-500">Elimine tarefas manuais repetitivas, como transcodificação e movimentação de arquivos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <Lock className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Segurança e Controle</h3>
                  <p className="text-sm text-gray-500">Gerencie permissões de acesso granulares e tenha logs completos de quem acessou o quê.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <BarChart3 className="text-[#EE6025] mb-4" size={32} />
                  <h3 className="font-bold text-[#263858] mb-2">Monetização de Acervo</h3>
                  <p className="text-sm text-gray-500">Transforme arquivos mortos em receita ao facilitar o reuso e venda de conteúdo histórico.</p>
                </div>
              </div>
            </section>

            {/* FAQ SEO */}
            <section>
              <h2 className="text-2xl font-bold text-[#263858] mb-6">Perguntas Frequentes sobre MAM</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold text-[#263858]">Qual a diferença entre MAM e DAM?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Enquanto o DAM (Digital Asset Management) foca em ativos de marca gerais (logos, PDFs, imagens), o MAM é especializado em vídeo e áudio, lidando com timecodes, legendas, múltiplas faixas de áudio e formatos broadcast pesados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold text-[#263858]">O MAM substitui o servidor de armazenamento?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Não, o MAM é a camada de inteligência que gerencia o armazenamento. Ele orquestra onde os arquivos ficam (disco rápido, fita LTO, nuvem) de forma transparente para o usuário.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-[#263858] text-white p-8 rounded-lg shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Precisa de um MAM?</h3>
              <p className="text-gray-300 mb-6 text-sm">
                O <strong>Media Portal</strong> oferece a solução de MAM mais completa do mercado brasileiro, usada por grandes redes como TV Cultura e Rede TV!.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Interface Web Intuitiva</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Integração com Adobe Premiere</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="text-[#EE6025] mr-2" /> Suporte Local 24/7</li>
              </ul>
              <Link href="/products/cloudfly">
                <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold py-6 rounded shadow-lg">
                    Conhecer Soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
