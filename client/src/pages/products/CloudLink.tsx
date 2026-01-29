import ProductLayout from "@/components/ProductLayout";
import { Link as LinkIcon } from "lucide-react";

export default function CloudLink() {
  return (
    <ProductLayout
      title="CloudLink"
      subtitle="Solução Híbrida Inteligente"
      description="O melhor dos dois mundos: a elasticidade da nuvem aliada à performance de um storage local de alta performance."
      icon={<LinkIcon size={24} />}
      features={[
        "Storage local para até 32 ilhas",
        "Integração nativa com nuvem",
        "Monitoramento 24/7 via NOC",
        "Compatível com Avid, Adobe e DaVinci",
        "Orquestrador de fluxos automático",
        "Redundância e alta disponibilidade"
      ]}
    >
      <div className="space-y-12">
        <div>
          <h2>O Poder do Híbrido</h2>
          <p>
            O <strong>CloudLink</strong> é a solução híbrida definitiva para gestão de conteúdo digital da Media Portal. Com ele, aliamos os melhores recursos da computação em nuvem — como elasticidade, economia e segurança — a um hardware de armazenamento local de alta performance, capaz de atender até 32 ilhas de edição simultaneamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
            <h4 className="text-[#263858] font-bold">Storage Dedicado</h4>
            <p className="text-sm text-gray-600">Hardware robusto para edição de vídeo in-house de alta performance.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
            <h4 className="text-[#263858] font-bold">Monitoramento NOC</h4>
            <p className="text-sm text-gray-600">Network Operation Center acompanhando sua infraestrutura em tempo real.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
            <h4 className="text-[#263858] font-bold">MAM Integrado</h4>
            <p className="text-sm text-gray-600">Conexão com a nuvem para arquivamento digital e análise de vídeo.</p>
          </div>
        </div>

        <div>
          <h3>Orquestrador de Fluxos</h3>
          <p>
            Os serviços de MAM ficam na nuvem e estão integrados com o storage in-house através do orquestrador de fluxos (Media Processing Workflow). O sistema monitora pastas pré-configuradas para automatizar todo o processo:
          </p>
          <ul>
            <li><strong>Pasta de Material Bruto:</strong> Fluxo simplificado que elabora baixa resolução sem consumir cota de análise profunda.</li>
            <li><strong>Pasta de Material Editado:</strong> Realiza arquivamento definitivo, análise de conteúdo, transcrição de voz e replicação na nuvem.</li>
          </ul>
        </div>

        <div>
          <h3>Storage para Edição de Vídeo</h3>
          <p>
            O coração do CloudLink é um storage projetado para ambientes críticos de produção:
          </p>
          <ul>
            <li><strong>Segurança:</strong> Redundâncias, ferramentas de monitoração e controle de acesso granular. Dados íntegros mesmo em falha de disco.</li>
            <li><strong>Alertas:</strong> Notificações automáticas sempre que ocorrer um evento fora dos padrões. Monitorado 24/7 com SLA de 6 horas.</li>
            <li><strong>Intuitivo:</strong> Interface simples para gestão de workspaces e usuários, sem depender de suporte técnico complexo.</li>
          </ul>
        </div>

        <div>
          <h3>Compatibilidade Total</h3>
          <p>
            O CloudLink fala a língua da sua ilha de edição. Compatível com os principais softwares do mercado:
          </p>
          <ul>
            <li><strong>Avid Media Composer:</strong> Suporte nativo a "Bin Locking" para colaboração simultânea.</li>
            <li><strong>Adobe:</strong> Premiere, After Effects e Speedgrade.</li>
            <li><strong>Blackmagic:</strong> DaVinci Resolve e Fusion.</li>
            <li><strong>Autodesk:</strong> 3DS Max, Maya e Flame.</li>
          </ul>
          <p>
            Suporta Windows, Linux e MacOS, integrando protocolos AFP, SMB, FTP e NFS via conexões 1GbE ou 10GbE.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
