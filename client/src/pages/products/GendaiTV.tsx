import ProductLayout from "@/components/ProductLayout";
import { Tv } from "lucide-react";

export default function GendaiTV() {
  return (
    <ProductLayout
      title="Gendai TV"
      subtitle="Ecossistema Broadcast Completo"
      description="Gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast) em uma plataforma unificada."
      icon={<Tv size={24} />}
      features={[
        "Playout Broadcast (SD, HD, 4K)",
        "Closed Caption automático ao vivo",
        "Streaming e OTT integrados",
        "Ingest com múltiplas gravações",
        "Player interativo com monetização",
        "Suporte centralizado"
      ]}
    >
      <div className="space-y-12">
        <div>
          <h2>A Nova Realidade do Mercado</h2>
          <p>
            O <strong>Gendai TV</strong> é a solução que entende a convergência da mídia. Ele oferece a gestão de todo o seu fluxo de produção, integrando ingest, distribuição (broadband) e exibição (broadcast). Uma ferramenta que traz eficiência, integração e agilidade com ótimo custo-benefício.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3>Componentes Modulares</h3>
            <p>Todos os componentes são modulares e podem ser integrados com recursos já em uso pela emissora:</p>
            <ul>
              <li><strong>INGEST:</strong> Múltiplas gravações simultâneas, integração com MAM e envio automático para playout.</li>
              <li><strong>STORAGE:</strong> Produção centralizada com Bin Locking e monitoramento ativo.</li>
              <li><strong>MAM:</strong> Gestão de ativos, catalogação e arquivamento (LTO, RDX, ODA).</li>
              <li><strong>PLAYOUT:</strong> Exibição broadcast com gestão de 2 canais independentes e grafismo integrado.</li>
            </ul>
          </div>
          <div>
            <h3>Closed Caption ao Vivo</h3>
            <p>Atendimento total à norma ABNT NBR 15290/2016 com tecnologia de ponta:</p>
            <ul>
              <li>Geração automática a partir do áudio ou vídeo.</li>
              <li>Operação 100% automática sem intervenção humana.</li>
              <li>Vocabulário com mais de 100.000 palavras.</li>
              <li>Infraestrutura on-premises (funciona sem internet).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3>Streaming & OTT</h3>
          <p>
            Leve seu conteúdo para além da TV convencional com nossa plataforma completa de distribuição digital:
          </p>
          <ul>
            <li><strong>Live Social:</strong> Transmissão integrada com redes sociais.</li>
            <li><strong>Player Interativo:</strong> Chat em tempo real, enquetes, votações e sorteios automatizados.</li>
            <li><strong>Monetização:</strong> Controle total de anúncios e sistema de doações integrado.</li>
            <li><strong>CMS Completo:</strong> Gestão de thumbnails, playlists, programas e publicação multibitrate.</li>
          </ul>
        </div>

        <div>
          <h3>MAM & Arquivamento</h3>
          <p>
            O coração da operação. Gerencie ativos digitais em qualquer padrão (SD, HD, 4K) com interface 100% web. Integração nativa com bibliotecas de fitas robotizadas (LTO), cartuchos RDX e discos óticos ODA (Sony). Transcodificação automática e gestão ilimitada de itens.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
