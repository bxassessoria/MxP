import ProductLayout from "@/components/ProductLayout";
import { Newspaper, Radio, Database, Archive, Play, Captions, Globe, Cast, Layers, PenTool } from "lucide-react";

export default function GendaiNews() {
  return (
    <ProductLayout
      title="Gendai News"
      subtitle="Gestão completa do fluxo de produção televisiva e jornalística"
      description="Integração total entre ingest, redação, distribuição e exibição. A solução definitiva para jornalismo moderno."
      icon={<Newspaper size={24} />}
      features={[
        "Sistema de Redação (News)",
        "Ingest e Captação",
        "MAM e Arquivamento",
        "Playout Integrado",
        "Closed Caption ao Vivo",
        "Distribuição Multiplataforma"
      ]}
    >
      <div className="space-y-16">
        {/* Seção Principal */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-[#263858] mb-6">Descrição</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              O <strong>Gendai News</strong> é o sistema que oferece a gestão de todo o seu fluxo de produção televisiva e jornalística, integrando ingest, redação do jornal, distribuição (broadband) e exibição (broadcast).
            </p>
            <p>
              A solução surge da demanda por uma ferramenta que entenda a nova realidade do mercado e oferece eficiência, integração e agilidade, tudo isso com um ótimo custo benefício e suporte centralizado.
            </p>
          </div>
        </div>

        {/* Componentes do Ecossistema */}
        <div>
          <h3 className="text-2xl font-bold text-[#263858] mb-8 flex items-center gap-3">
            <Layers className="text-[#EE6025]" />
            Ecossistema Jornalístico
          </h3>
          <p className="text-slate-600 mb-6 text-lg">
            Todos os componentes são modulares e permitem integrações com recursos já disponíveis em uso pela emissora:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComponentCard 
              icon={<PenTool className="text-[#EE6025]" />}
              title="NEWS - Redação"
              description="Sistema completo para redação, roteirização e gestão de pautas jornalísticas."
            />
            <ComponentCard 
              icon={<Radio className="text-red-500" />}
              title="Ingest"
              description="Captura multicanal com envio automático para redação e playout."
            />
            <ComponentCard 
              icon={<Database className="text-blue-500" />}
              title="Storage"
              description="Armazenamento centralizado de alta performance para produção."
            />
            <ComponentCard 
              icon={<Play className="text-green-500" />}
              title="Playout"
              description="Exibição confiável integrada ao rundown do jornal."
            />
            <ComponentCard 
              icon={<Captions className="text-purple-500" />}
              title="Closed Caption"
              description="Legendas automáticas ao vivo para acessibilidade total."
            />
            <ComponentCard 
              icon={<Archive className="text-orange-500" />}
              title="MAM"
              description="Gestão de ativos e arquivamento histórico do jornalismo."
            />
            <ComponentCard 
              icon={<Globe className="text-cyan-500" />}
              title="Streaming"
              description="Transmissão ao vivo simultânea para web e redes sociais."
            />
            <ComponentCard 
              icon={<Cast className="text-pink-500" />}
              title="OTT e VOD"
              description="Disponibilização on-demand das edições e reportagens."
            />
          </div>
        </div>

        {/* Diferenciais e Ganhos */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-[#263858] mb-6">Diferenciais Técnicos</h3>
            <ul className="space-y-4">
              <ListItem text="Integração total com sistema de MAM" />
              <ListItem text="Múltiplas gravações simultâneas" />
              <ListItem text="Envio automático de ingest para playout" />
              <ListItem text="Compatível com padrões de mercado" />
              <ListItem text="Gravação de vídeos ao vivo em padrão broadcast" />
            </ul>
          </div>

          <div className="bg-[#263858] text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Ganhos Operacionais</h3>
            <ul className="space-y-4">
              <ListItem text="Ambiente de trabalho colaborativo" dark />
              <ListItem text="Acesso simultâneo para redação e edição" dark />
              <ListItem text="Integração de produção, exibição e arquivamento" dark />
              <ListItem text="Gerenciamento de qualquer formato de arquivo" dark />
              <ListItem text="Suporte em Português (Horário Comercial BR)" dark />
            </ul>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}

function ComponentCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h4 className="font-bold text-[#263858] mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ListItem({ text, dark = false }: { text: string, dark?: boolean }) {
  return (
    <li className={`flex items-start gap-3 ${dark ? 'text-blue-100' : 'text-slate-700'}`}>
      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${dark ? 'bg-[#EE6025]' : 'bg-[#263858]'}`} />
      <span className="text-sm leading-relaxed">{text}</span>
    </li>
  );
}
