import ProductLayout from "@/components/ProductLayout";
import { Wrench, Settings, Puzzle, RefreshCw, Server, Zap, Globe, Workflow } from "lucide-react";

export default function CustomPrj() {
  return (
    <ProductLayout
      title="Custom PRJ"
      subtitle="Projetos customizados com aproveitamento da infraestrutura existente"
      description="Potencialize o poder do seu conteúdo integrando o diferencial da sua operação no Media Portal."
      icon={<Wrench size={24} />}
      features={[
        "Integração com infraestrutura existente",
        "Desenvolvimento sob medida",
        "Assinatura operacional personalizada",
        "Conexão com sistemas Broadcast legados",
        "Automação de rotinas repetitivas",
        "Projetos on-premises ou híbridos"
      ]}
    >
      <div className="space-y-16">
        {/* Seção Principal */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-[#263858] mb-6">Descrição</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Desenvolvemos projetos customizados potencializando a infraestrutura já existente, e integramos o seu diferencial no <strong>Media Portal</strong>, garantindo que o sistema tenha a sua assinatura operacional.
            </p>
            <p>
              A Media Portal é capaz de integrar os ambientes de captação, edição, exibição e arquivamento através da sistematização dos fluxos de arquivos. Os fluxos transformam as rotinas repetitivas em tarefas automáticas, melhorando a produtividade e qualidade da operação.
            </p>
          </div>
        </div>

        {/* Integrações */}
        <div>
          <h3 className="text-2xl font-bold text-[#263858] mb-8 flex items-center gap-3">
            <Puzzle className="text-[#EE6025]" />
            Ecossistema de Integrações
          </h3>
          <p className="text-slate-600 mb-6 text-lg">
            Já integramos o Media Portal com uma grande variedade de sistemas profissionais na área de Broadcast:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IntegrationCard 
              category="Servidores de Vídeo"
              partners={["Grass Valley", "Seachange", "Omneon", "ORAD", "Avid"]}
              icon={<Server size={24} className="text-blue-500" />}
            />
            <IntegrationCard 
              category="Transcodificação"
              partners={["Telestream", "Harmonic (Rhozet)", "MainConcept"]}
              icon={<RefreshCw size={24} className="text-green-500" />}
            />
            <IntegrationCard 
              category="Arquivamento"
              partners={["Fitas LTO", "Discos Magnéticos (RDX)", "Storage NAS/SAN"]}
              icon={<Settings size={24} className="text-purple-500" />}
            />
          </div>
        </div>

        {/* Tipos de Projeto */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <h3 className="text-2xl font-bold text-[#263858] mb-8">Modelos de Implementação</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 h-fit">
                <Server className="text-[#EE6025]" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#263858] mb-2">On-Premises</h4>
                <p className="text-slate-600 leading-relaxed">
                  Projetos com alto grau de customização implementados em infraestrutura local, baseados em data center in-house para máxima performance e controle.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 h-fit">
                <Globe className="text-blue-500" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#263858] mb-2">Cloud & Híbrido</h4>
                <p className="text-slate-600 leading-relaxed">
                  Com o avanço e aceitação da nuvem, desenvolvemos projetos customizados baseados 100% em cloud ou em arquiteturas híbridas que unem o melhor dos dois mundos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#263858] to-[#1e2d4a] text-white p-10 rounded-2xl text-center">
          <Workflow size={48} className="mx-auto mb-6 text-[#EE6025]" />
          <h3 className="text-2xl font-bold mb-4">Tem um sistema legado ou fluxo específico?</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Caso você tenha algum sistema em produção e deseja integrá-lo com a infraestrutura de TI permitindo um intercâmbio de arquivos de forma gerenciada, converse conosco!
          </p>
          <button className="bg-[#EE6025] hover:bg-[#d5501b] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Agendar Consultoria Técnica
          </button>
        </div>
      </div>
    </ProductLayout>
  );
}

function IntegrationCard({ category, partners, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-slate-50 p-2 rounded-lg">
          {icon}
        </div>
        <h4 className="font-bold text-[#263858]">{category}</h4>
      </div>
      <ul className="space-y-2">
        {partners.map((partner: string, i: number) => (
          <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            {partner}
          </li>
        ))}
      </ul>
    </div>
  );
}
