import ProductLayout from "@/components/ProductLayout";
import { Link as LinkIcon, Server, CloudCog, Activity, FolderGit2, Share2, BookOpen, Film, Network } from "lucide-react";

export default function CloudLink() {
  return (
    <ProductLayout
      title="CloudLink"
      subtitle="Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises"
      description="O melhor dos dois mundos: a elasticidade da nuvem aliada à performance de um hardware de armazenamento local capaz de atender até 32 ilhas de edição."
      icon={<LinkIcon size={24} />}
      features={[
        "Storage local para até 32 ilhas",
        "Integração nativa com nuvem",
        "Monitoramento 24/7 via NOC",
        "Arquivamento digital automático",
        "Orquestrador de fluxos (Workflow)",
        "Análise de vídeo e transcrição"
      ]}
    >
      <div className="space-y-16">
        {/* Seção Principal */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-[#263858] mb-6">Descrição</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              O <strong>CloudLink</strong> é a solução híbrida para gestão de conteúdo digital da Media Portal. Com esse sistema podemos aliar o melhor dos recursos oferecidos pela computação em nuvem, como elasticidade, economia e segurança, a um hardware de armazenamento local de alta performance.
            </p>
            <p>
              Todos os recursos e ganhos operacionais descritos no CloudFly são mantidos, e a integração com o storage de edição na sua infraestrutura local potencializa maiores ganhos operacionais.
            </p>
          </div>
        </div>

        {/* Destaques em Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <HighlightCard 
            icon={<Server className="text-blue-500" />}
            title="Storage Dedicado"
            description="Hardware de alta performance para edição de vídeo, operando integrado com a infraestrutura de nuvem."
          />
          <HighlightCard 
            icon={<Activity className="text-green-500" />}
            title="Monitoramento NOC"
            description="Network Operation Center integrado, permitindo acompanhamento em tempo real para prevenção de problemas."
          />
          <HighlightCard 
            icon={<CloudCog className="text-purple-500" />}
            title="MAM Integrado"
            description="Conexão com a nuvem que integra funcionalidades avançadas de arquivamento digital e análise de vídeo."
          />
        </div>

        {/* Orquestrador de Fluxos */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <FolderGit2 className="text-[#EE6025]" size={32} />
            <h3 className="text-2xl font-bold text-[#263858] m-0">Orquestrador de Fluxos</h3>
          </div>
          
          <p className="text-slate-700 mb-8 text-lg">
            Os serviços de MAM ficam na nuvem e estão integrados com o storage in-house através do orquestrador de fluxos (Media Processing Workflow). O sistema monitora pastas pré-configuradas para automatizar todo o processo:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="text-lg font-bold text-[#263858] mb-3 flex items-center gap-2">
                <Film size={20} className="text-slate-400" />
                Pasta de Material Bruto
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Fluxo simplificado que elabora uma baixa resolução, sem realizar análise de conteúdo ou transcrição. O volume processado por este fluxo <strong>não é contabilizado</strong> na cota de ingest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#EE6025]" />
              <h4 className="text-lg font-bold text-[#263858] mb-3 flex items-center gap-2">
                <Network size={20} className="text-[#EE6025]" />
                Pasta de Material Editado
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Realiza o arquivamento definitivo, elabora baixa resolução, faz análise de conteúdo, transcrição de voz e replicação na nuvem. O volume <strong>é contabilizado</strong> na cota de ingest.
              </p>
            </div>
          </div>
        </div>

        {/* Recursos Adicionais */}
        <div>
          <h3 className="text-2xl font-bold text-[#263858] mb-8">Recursos Adicionais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureRow 
              icon={<Share2 className="text-blue-500" />}
              title="Publicação Multiplataforma"
              description="Fluxos automatizados de publicação no Vimeo, Youtube, Facebook e Sambatech para o acervo de vídeos editados."
            />
            <FeatureRow 
              icon={<BookOpen className="text-green-500" />}
              title="Dicionário Controlado"
              description="Apoio ao processo de catalogação e indexação, composto por identidades e thesaurus."
            />
          </div>
        </div>

        {/* Nota de Precificação */}
        <div className="bg-[#263858] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Precificação Personalizada</h3>
            <p className="text-blue-100 max-w-xl">
              Entre em contato para desenharmos a arquitetura ideal para sua emissora ou produtora.
            </p>
          </div>
          <button className="bg-[#EE6025] hover:bg-[#d5501b] text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
            Falar com Consultor
          </button>
        </div>
      </div>
    </ProductLayout>
  );
}

function HighlightCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
      <div className="w-14 h-14 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-[#263858] mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureRow({ icon, title, description }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-slate-100 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-[#263858] mb-1">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
