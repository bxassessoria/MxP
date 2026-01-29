import ProductLayout from "@/components/ProductLayout";
import { Box } from "lucide-react";

export default function GemsInABox() {
  return (
    <ProductLayout
      title="Gems in a Box"
      subtitle="MAM On-Premises Escalável"
      description="Infraestrutura dimensionada de acordo com a sua carga de arquivamento. Soluções robustas para gestão de acervos locais."
      icon={<Box size={24} />}
      features={[
        "Opala Box (até 24TB/ano)",
        "Agata Box (até 48TB/ano)",
        "Rubi Box (acima de 48TB/ano)",
        "Gestão de vídeos, fotos e documentos",
        "Metadados específicos por tipo de arquivo",
        "Infraestrutura on-premises dedicada"
      ]}
    >
      <div className="space-y-12">
        <div>
          <h2>O Tamanho Certo para Sua Operação</h2>
          <p>
            Os produtos <strong>Gems in a Box</strong> são completamente on-premises e têm sua infraestrutura dimensionada de acordo com a carga de conteúdo que se deseja arquivar. Evite perdas financeiras com infraestruturas superdimensionadas que ficam ociosas ou gargalos operacionais com sistemas subdimensionados.
          </p>
        </div>

        <div>
          <h3>Versatilidade de Arquivos</h3>
          <p>
            Apesar de ser voltado para gestão de acervos de vídeos, o sistema gerencia qualquer tipo de arquivo: fotos, áudios, documentos, plantas de engenharia, projetos gráficos, games, etc.
          </p>
          <p>
            Cada tipo de item possui seu conjunto específico de metadados. Por exemplo:
          </p>
          <ul>
            <li><strong>Fotos:</strong> Campos para fotógrafo, créditos, data e local.</li>
            <li><strong>Vídeos:</strong> Campos para cinegrafista, repórter, programa e duração.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center hover:shadow-md transition-all">
            <h4 className="text-[#EE6025] font-bold text-xl mb-2">Opala Box</h4>
            <p className="text-sm text-gray-600 mb-4">Pequenas Cargas</p>
            <p className="text-gray-700 font-medium">Até 24TB / ano</p>
            <p className="text-xs text-gray-500 mt-2">Ideal para iniciantes na gestão profissional de acervos.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-all">
            <h4 className="text-[#263858] font-bold text-xl mb-2">Agata Box</h4>
            <p className="text-sm text-gray-600 mb-4">Cargas Médias</p>
            <p className="text-gray-700 font-medium">Até 48TB / ano</p>
            <p className="text-xs text-gray-500 mt-2">Para operações consolidadas com fluxo constante.</p>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center hover:shadow-md transition-all">
            <h4 className="text-red-600 font-bold text-xl mb-2">Rubi Box</h4>
            <p className="text-sm text-gray-600 mb-4">Grandes Cargas</p>
            <p className="text-gray-700 font-medium">Acima de 48TB / ano</p>
            <p className="text-xs text-gray-500 mt-2">Projetos de alta demanda e arquivamento massivo.</p>
          </div>
        </div>

        <div>
          <h3>Definição de Carga</h3>
          <p>
            Uma carga é considerada pequena quando não ultrapassa 24TB de conteúdo arquivado anualmente. Uma carga média varia de 30TB até 200TB anuais (aprox. 1TB/dia). Para cargas superiores, desenvolvemos projetos customizados com estudos detalhados dos fluxos que se deseja sistematizar.
          </p>
        </div>

        <div>
          <h3>Precificação</h3>
          <p>
            Entre em contato com o nosso time de vendas para realizarmos uma precificação adequada ao seu fluxo de trabalho e volume de dados.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
