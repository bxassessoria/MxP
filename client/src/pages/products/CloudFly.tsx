import ProductLayout from "@/components/ProductLayout";
import { Cloud, CheckCircle2, Zap, Brain, Mic, Layout, Search, Scissors, BookOpen } from "lucide-react";

export default function CloudFly() {
  return (
    <ProductLayout
      title="CloudFly"
      subtitle="Gestão e processamento de acervo digital 100% em nuvem"
      description="A solução mais rápida para iniciar o uso de um sistema MAM (Media Asset Management). Totalmente baseada em nuvem, permitindo a visualização em baixa resolução e download da mídia mezanino."
      icon={<Cloud size={24} />}
      features={[
        "Gestão de acervo 100% em nuvem",
        "Visualização rápida em baixa resolução",
        "Download de mídia mezanino",
        "Sem necessidade de infraestrutura local",
        "Integração com IA e Voice Analyser",
        "Decupagem e clipagem online"
      ]}
    >
      <div className="space-y-16">
        {/* Seção Principal */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-[#263858] mb-6">Descrição</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              O <strong>CloudFly</strong> é uma solução totalmente baseada em nuvem, e não tem necessidade de uma infraestrutura local. É o caminho mais rápido para iniciar o uso de um sistema MAM (Media Asset Management). O sistema MAM disponibiliza recursos para organização e gestão de grandes acervos digitais. O sistema gerencia uma versão do vídeo em baixa resolução permitindo a rápida visualização do conteúdo.
            </p>
            <p>
              O CloudFly pode ser integrado com mecanismos inteligentes para geração automática de metadados, sistema de decupagem automática, tais como transcrição de voz para texto, reconhecimento de falante, reconhecimento de faces, reconhecimento de cenas, dentre outros recursos inovadores.
            </p>
            <p className="font-medium text-[#EE6025] text-xl">
              O CloudFly leva você para a nuvem em um bater de asas!
            </p>
          </div>
        </div>

        {/* Recursos em Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#263858] mb-8 border-l-4 border-[#EE6025] pl-4">
            Recursos Principais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Search className="text-blue-500" />}
              title="Navegação e Pesquisa"
              description="Recursos avançados para navegação no acervo e formulários para pesquisas simples e complexas."
            />
            <FeatureCard 
              icon={<Layout className="text-purple-500" />}
              title="Clipboard"
              description="Elaboração de itens favoritos e organização personalizada através do Clipboard."
            />
            <FeatureCard 
              icon={<Scissors className="text-orange-500" />}
              title="Decupagem e Clipes"
              description="Ferramentas integradas para decupagem de trechos de vídeos e elaboração de clipes."
            />
            <FeatureCard 
              icon={<BookOpen className="text-green-500" />}
              title="Dicionário Controlado"
              description="Integração nativa com Dicionário Controlado para padronização de metadados."
            />
            <FeatureCard 
              icon={<Brain className="text-pink-500" />}
              title="Análise Inteligente"
              description="Integração com mecanismos de IA para reconhecimento de faces, cenas e falantes."
            />
            <FeatureCard 
              icon={<Mic className="text-cyan-500" />}
              title="Voice Analyser"
              description="Módulo de transcrição de voz para texto com interface para correção para todos os tamanhos de operação."
            />
          </div>
        </div>

        {/* Ganhos e Precificação */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-[#EE6025]" size={28} />
              <h3 className="text-xl font-bold text-[#263858] m-0">Ganhos Operacionais</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Eliminação de custos com infraestrutura local",
                "Acesso remoto e colaborativo ao acervo",
                "Agilidade na busca e recuperação de mídia",
                "Automação de processos manuais de catalogação",
                "Escalabilidade imediata conforme demanda"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#263858] p-8 rounded-2xl text-white shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cloud size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-white drop-shadow-sm">Precificação Flexível</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                O modelo de negócios do CloudFly é adaptável ao tamanho da sua operação. Entre em contato para uma análise personalizada.
              </p>
              <button className="bg-[#EE6025] hover:bg-[#d5501b] text-white font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-[#263858] mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
