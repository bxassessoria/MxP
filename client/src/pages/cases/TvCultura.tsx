import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Link } from "wouter";

export default function TvCultura() {
  return (
    <Layout>
      <div className="bg-white min-h-screen pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <Link href="/cases">
              <Button variant="ghost" className="text-[#263858]/60 hover:text-[#263858] hover:bg-[#263858]/5 mb-8 pl-0 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Cases
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#263858] mb-6 leading-tight">
              TV Cultura – Um salto no tempo
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>4 de abril, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Publicado por <strong>Media Portal</strong></span>
              </div>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg prose-headings:text-[#263858] prose-p:text-gray-600 prose-strong:text-[#263858] max-w-none">
            <p className="lead text-xl text-gray-700 font-medium">
              A destruição de acervos audiovisuais das emissoras brasileiras por incêndios é um dos piores capítulos da história da televisão e por si só merecia um estudo de causas e efeitos.
            </p>

            <p>
              As causas quase sempre foram nebulosas, mas os efeitos são bem conhecidos. Programas memoráveis, interpretações únicas e apresentações inesquecíveis foram perdidas, privando os telespectadores da possibilidade de ver e rever grandes momentos da televisão e da história do país.
            </p>

            <p>
              Há algum tempo os arquivos audiovisuais começaram a ser tratados como ativos das empresas de comunicação que podem ter sua rentabilidade ampliada. Por isso passaram a receber os devidos cuidados para estarem em boas condições no momento de serem reutilizados.
            </p>

            <p>
              Com a missão de digitalizar mais de 80 mil horas de imagem do acervo de fitas de 1 e 2 polegadas (BCNs e Quadruplex), U-Matic, Beta analógico, além de outros formatos, José Chaves, diretor de tecnologia da TV Cultura de São Paulo e sua equipe de engenharia desenharam em 2005 um novo sistema de gerenciamento de ativos digitais. A evolução tecnológica se estendeu à estrutura física da emissora e às áreas de produção, edição, exibição, consumindo cerca de US$6 milhões.
            </p>

            <h3>Revendo conceitos</h3>
            
            <div className="my-12 bg-gray-50 p-8 rounded-xl border-l-4 border-[#EE6025]">
              <p className="italic text-lg text-gray-700 m-0">
                "Tipicamente, um arquivo de 1 hora com qualidade de 50 Mbps/s, ocupa cerca de 20 GB de armazenamento e impõe grandes exigências às redes de dados. Além disso, quando extrapolamos essas exigências para centenas ou milhares de horas de arquivo, fica claro o quanto é importante definir uma solução que contemple armazenamento, pesquisa e resgate dos conteúdos."
              </p>
            </div>

            <p>
              Para começar a atender estas exigências, o primeiro passo dado pela emissora foi implantar o <strong>Media Portal</strong>, uma solução brasileira para gerenciar grandes volumes de conteúdo digital, tais como vídeos, sons, gráficos, fotos, livros, álbuns, seja qual for à origem.
            </p>

            <p>
              Graças a essa solução, uma tarefa de inspeção ou seleção de cenas pode ser feita a partir de uma réplica em baixa resolução dos arquivos originais, usando um arquivo compatível com o Quicktime a 300 kbps. Assim, apesar de ter o mesmo conteúdo, o arquivo possui um tamanho muito menor e é mais fácil de ser distribuído para pré-edições e decupagens feitas por jornalistas, por exemplo. Quando a necessidade é editar, finalizar ou exibir, o software disponibiliza o arquivo em alta resolução. O resultado é que a TV Cultura reduziu significativamente a quantidade de fitas e o tempo de consumo na procura de materiais.
            </p>

            <h3>Novas ferramentas</h3>
            <p>
              Um grande diferencial nas soluções de gestão de ativos digitais é a possibilidade de movimentar os arquivos dentro da rede corporativa de forma simples e transparente. As movimentações podem ser traduzidas em fluxo de arquivamento em fita LTO, fluxo de recuperação para exibição (disponibilização no servidor de vídeo de exibição) e fluxo de recuperação para edição de material (disponibilização em ilhas de edição), por exemplo.
            </p>

            <p>
              Através dessas funcionalidades, as diferentes áreas de armazenamento passam a ser gerenciadas para que o arquivo requisitado seja rapidamente disponibilizado, isto é, existe uma inteligência capaz de encontrar o arquivo mais próximo e acionar a movimentação para a área desejada.
            </p>

            <h3>Arquitetura do Sistema</h3>
            <p>
              O sistema base para controle e gestão do acervo é composto por quatro servidores, rede fiber channel e rede gigabit. Adicionalmente existem áreas de armazenamento tais como storage buffer e robótica onde as fitas LTO são manipuladas. Os quatro servidores são necessários, pois existem quatro serviços diferentes a serem prestados:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4 mb-8">
              <li><strong>Serviço de banco de dados:</strong> implementa o catálogo, a base de indexação e registra todo o histórico de cada item do acervo.</li>
              <li><strong>Serviço de movimentação de arquivo:</strong> controlado pelo componente Queue Handler, administra as áreas de armazenamento e os caminhos para movimentação.</li>
              <li><strong>Serviço de transcodificação de formatos:</strong> permite a criação de representação em baixa resolução e conversões entre diferentes formatos.</li>
              <li><strong>Serviço para distribuição:</strong> permite consultas e visualização sem acessar o arquivo em alta resolução.</li>
            </ul>

            <p>
              Os conceitos envolvidos na digitalização da TV Cultura ainda reúnem os componentes storage buffer e robótica. O storage buffer consiste em uma área de armazenamento temporária para o tráfego dos arquivos de alta resolução entre a robótica e os servidores de vídeo.
            </p>
          </article>

          {/* Footer Share */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Compartilhar este case</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:text-[#EE6025] hover:border-[#EE6025]">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
