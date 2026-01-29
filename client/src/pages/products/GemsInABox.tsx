import ProductLayout from "@/components/ProductLayout";
import { Box, Server, Database, Layers, ShieldCheck, HardDrive, FileType, Scale } from "lucide-react";

export default function GemsInABox() {
  return (
    <ProductLayout
      title="Gems in a Box"
      subtitle="Projetos com infraestrutura on-premises dimensionados de acordo com a carga de conteúdo"
      description="Soluções robustas e escaláveis para gestão de acervos locais, evitando ociosidade e gargalos operacionais."
      icon={<Box size={24} />}
      features={[
        "Infraestrutura on-premises dedicada",
        "Dimensionamento sob medida (Small, Medium, Large)",
        "Gestão de vídeos, fotos, áudios e documentos",
        "Metadados customizáveis por tipo de arquivo",
        "Alta performance local",
        "Sem custos recorrentes de nuvem"
      ]}
    >
      <div className="space-y-16">
        {/* Descrição Principal */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-[#263858] mb-6">Descrição</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Os produtos <strong>Gems in a Box</strong> são completamente <em>on-premises</em>, e tem sua infraestrutura dimensionada de acordo com a carga de conteúdo que se deseja arquivar. Para cargas pequenas é possível elaborar um pequeno projeto, enquanto que para cargas maiores é necessário ter uma infraestrutura maior e mais robusta.
            </p>
            <p>
              Apesar do sistema ser voltado para gestão de acervos de vídeos, é possível gerenciar qualquer tipo de arquivo tais como: fotos, áudios, documentos, plantas de engenharia, projetos gráficos, games, etc. Cada tipo de item tem o seu respectivo conjunto específico de metadados, no caso de fotos existem os campos fotógrafos e créditos enquanto que para vídeos existem os campos cinegrafista e reporter.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#263858] p-6 my-8 rounded-r-lg">
              <p className="text-[#263858] italic font-medium m-0">
                "Projetando a infraestrutura conforme a necessidade operacional, você estará evitando perdas financeiras com infraestruturas superdimensionadas que ficam ociosas, e sobrecarga e gargalos operacionais com infraestruturas subdimensionadas."
              </p>
            </div>
          </div>
        </div>

        {/* Dimensionamento de Carga */}
        <div>
          <h3 className="text-2xl font-bold text-[#263858] mb-8 flex items-center gap-3">
            <Scale className="text-[#EE6025]" />
            Dimensionamento de Carga
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <LoadCard 
              title="Pequena Carga"
              limit="Até 24TB / ano"
              description="Ideal para operações iniciais ou acervos específicos que não ultrapassam 2TB mensais."
              color="bg-green-50 border-green-200 text-green-700"
              icon={<Server size={32} />}
            />
            <LoadCard 
              title="Média Carga"
              limit="30TB a 200TB / ano"
              description="Para operações consolidadas, correspondendo a aproximadamente 1TB de arquivamento por dia."
              color="bg-blue-50 border-blue-200 text-blue-700"
              icon={<Database size={32} />}
            />
            <LoadCard 
              title="Alta Carga"
              limit="Acima de 200TB"
              description="Projetos customizados que necessitam de estudos e avaliação detalhada dos fluxos."
              color="bg-purple-50 border-purple-200 text-purple-700"
              icon={<HardDrive size={32} />}
            />
          </div>
        </div>

        {/* Modelos de Box */}
        <div>
          <h3 className="text-2xl font-bold text-[#263858] mb-8">Modelos Disponíveis</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <BoxModelCard 
              name="Opala Box" 
              type="Entrada"
              features={["Até 24TB anuais", "Hardware compacto", "Implantação rápida"]}
              borderColor="border-orange-200"
              headerColor="bg-orange-50"
              textColor="text-[#EE6025]"
            />
            <BoxModelCard 
              name="Agata Box" 
              type="Intermediário"
              features={["Até 48TB anuais", "Redundância básica", "Performance otimizada"]}
              borderColor="border-slate-200"
              headerColor="bg-slate-50"
              textColor="text-slate-700"
            />
            <BoxModelCard 
              name="Rubi Box" 
              type="Enterprise"
              features={["Acima de 48TB anuais", "Alta disponibilidade", "Cluster de processamento"]}
              borderColor="border-red-200"
              headerColor="bg-red-50"
              textColor="text-red-700"
            />
          </div>
        </div>

        {/* Versatilidade */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <h3 className="text-2xl font-bold text-[#263858] mb-6 flex items-center gap-3">
            <FileType className="text-[#EE6025]" />
            Versatilidade de Arquivos
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 mb-4">
                O sistema é agnóstico ao tipo de arquivo, permitindo gerenciar diversos formatos com metadados específicos para cada um:
              </p>
              <ul className="space-y-3">
                {[
                  "Vídeos (Cinegrafista, Repórter, Programa)",
                  "Fotos (Fotógrafo, Créditos, Evento)",
                  "Documentos e Contratos",
                  "Projetos de Engenharia e Arquitetura",
                  "Assets de Games e Projetos Gráficos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#EE6025]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-slate-100">
                  <Layers className="mx-auto text-blue-500 mb-2" />
                  <span className="text-sm font-bold text-slate-700">Organização</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-slate-100">
                  <ShieldCheck className="mx-auto text-green-500 mb-2" />
                  <span className="text-sm font-bold text-slate-700">Segurança</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-slate-100">
                  <Database className="mx-auto text-purple-500 mb-2" />
                  <span className="text-sm font-bold text-slate-700">Metadados</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-slate-100">
                  <Server className="mx-auto text-orange-500 mb-2" />
                  <span className="text-sm font-bold text-slate-700">Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}

function LoadCard({ title, limit, description, color, icon }: any) {
  return (
    <div className={`p-6 rounded-xl border ${color} hover:shadow-md transition-all`}>
      <div className="mb-4 opacity-80">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <div className="text-2xl font-bold mb-3">{limit}</div>
      <p className="text-sm opacity-90 leading-relaxed">{description}</p>
    </div>
  );
}

function BoxModelCard({ name, type, features, borderColor, headerColor, textColor }: any) {
  return (
    <div className={`bg-white rounded-xl border ${borderColor} overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}>
      <div className={`${headerColor} p-6 border-b ${borderColor}`}>
        <h4 className={`text-2xl font-bold ${textColor} mb-1`}>{name}</h4>
        <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{type}</span>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full ${textColor}`} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
