import ProductLayout from "@/components/ProductLayout";
import { Cloud } from "lucide-react";

export default function CloudFly() {
  return (
    <ProductLayout
      title="CloudFly"
      subtitle="MAM 100% em Nuvem"
      description="A solução mais rápida para iniciar o uso de um sistema MAM. Totalmente baseada em nuvem, sem necessidade de infraestrutura local."
      icon={<Cloud size={24} />}
      features={[
        "Gestão de grandes acervos digitais",
        "Visualização rápida (proxy)",
        "Decupagem e transcrição automática",
        "Reconhecimento facial e de cenas (IA)",
        "Ambiente colaborativo e seguro",
        "Redução de custos com mídia física"
      ]}
    >
      <div className="space-y-12">
        <div>
          <h2>Voe para a nuvem</h2>
          <p>
            O <strong>CloudFly</strong> é uma solução totalmente baseada em nuvem, eliminando a necessidade de uma infraestrutura local complexa. É o caminho mais rápido para iniciar o uso de um sistema MAM (Media Asset Management), disponibilizando recursos avançados para organização e gestão de grandes acervos digitais.
          </p>
          <p>
            O sistema gerencia automaticamente uma versão do vídeo em baixa resolução (proxy), permitindo a rápida visualização e decupagem do conteúdo de qualquer lugar, a qualquer momento.
          </p>
        </div>

        <div>
          <h3>Inteligência Artificial Integrada</h3>
          <p>
            O CloudFly pode ser integrado com mecanismos inteligentes para geração automática de metadados, revolucionando a forma como você encontra seu conteúdo:
          </p>
          <ul>
            <li><strong>Transcrição de voz para texto:</strong> Converta áudio em texto pesquisável automaticamente.</li>
            <li><strong>Reconhecimento de falante:</strong> Identifique quem está falando em cada trecho do vídeo.</li>
            <li><strong>Reconhecimento de faces:</strong> Encontre pessoas específicas em segundos.</li>
            <li><strong>Reconhecimento de cenas:</strong> Classifique conteúdo visual automaticamente.</li>
          </ul>
        </div>

        <div>
          <h3>Voice Analyser</h3>
          <p>
            Módulo exclusivo de transcrição de voz para texto que inclui uma interface intuitiva para correção da transcrição, adaptável para todos os tamanhos de operação. Ideal para legendagem e indexação profunda de acervos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h4 className="text-[#263858] font-bold mb-4 mt-0">Recursos de Gestão</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li>Navegação intuitiva no acervo</li>
              <li>Formulários para pesquisas simples e avançadas</li>
              <li>Elaboração de itens favoritos (Clipboard)</li>
              <li>Decupagem de trechos e elaboração de clipes</li>
              <li>Integração com Dicionário Controlado</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h4 className="text-[#EE6025] font-bold mb-4 mt-0">Ganhos Operacionais</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li>Ambiente colaborativo com acesso simultâneo</li>
              <li>Sistematização de revisão e aprovação</li>
              <li>Conversões automáticas de formato</li>
              <li>Auditoria completa de ações</li>
              <li>Redução drástica de custos operacionais</li>
            </ul>
          </div>
        </div>

        <div>
          <h3>Precificação Sob Medida</h3>
          <p>
            O CloudFly leva você para a nuvem em um bater de asas! Entre em contato com o nosso time de vendas para realizarmos uma precificação adequada ao seu fluxo de trabalho, pagando apenas pelo que usar.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
