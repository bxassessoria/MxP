import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Server, Search, Shield, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";

const productData: Record<string, { title: string; desc: string; features: string[]; image: string }> = {
  "mam": {
    title: "Media Asset Management",
    desc: "A solução definitiva para organizar, gerenciar e distribuir seu acervo de mídia. O MAM Media Portal centraliza seus ativos, facilita a busca com IA e automatiza fluxos de trabalho complexos.",
    features: ["Indexação Automática", "Busca Cognitiva (IA)", "Gestão de Direitos", "Workflow Designer", "Player Frame-a-Frame", "Integração Adobe Premiere"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  "cloud": {
    title: "Cloud Archive",
    desc: "Armazenamento inteligente na nuvem. Reduza custos de infraestrutura física e garanta a segurança do seu acervo histórico com redundância geográfica e acesso instantâneo.",
    features: ["Tiering Automático", "Criptografia Ponta-a-Ponta", "Acesso Global", "Baixa Latência", "Redução de Custos (TCO)", "Disaster Recovery"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  "ai": {
    title: "Inteligência Artificial",
    desc: "Transforme metadados em valor. Nossa engine de IA analisa seus vídeos para identificar rostos, objetos, marcas e transcrever falas, tornando seu arquivo 100% pesquisável.",
    features: ["Speech-to-Text", "Reconhecimento Facial", "OCR em Vídeo", "Detecção de Logos", "Análise de Sentimento", "Tradução Automática"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  "ingest": {
    title: "Ingest & Playout",
    desc: "Capture e exiba conteúdo com confiabilidade. Soluções robustas para ingestão de múltiplos feeds e playout automatizado para canais lineares e digitais.",
    features: ["Gravação Loop 24/7", "Suporte a NDI e SDI", "Agendamento de Gravação", "Playout em Nuvem", "Gráficos Integrados", "SCTE-35/104"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const productId = params?.id || "mam"; // Default to MAM if not found or generic
  const product = productData[productId] || productData["mam"];

  return (
    <Layout>
      <div className="bg-[#02040A] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={product.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/80 to-transparent z-0"></div>
        
        <div className="container relative z-10">
          <Link href="/products">
            <a className="inline-flex items-center text-gray-400 hover:text-[#00FF00] mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Voltar para Produtos
            </a>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{product.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {product.desc}
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-[#00FF00] hover:bg-green-400 text-black font-bold px-8 py-3 h-auto text-lg rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                Solicitar Demo
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-3 h-auto text-lg rounded-full">
                Download Datasheet
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Principais Recursos</h2>
                <div className="grid gap-6">
                    {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00FF00]/30 transition-colors">
                            <CheckCircle2 className="text-[#00FF00] mt-1 mr-4 shrink-0" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{feature}</h3>
                                <p className="text-gray-400 text-sm">Otimize sua operação com {feature.toLowerCase()} de alta performance.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Por que escolher Media Portal?</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-300">
                            <Shield className="text-[#00FF00] mr-3" size={20} /> Segurança de nível bancário
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Zap className="text-[#00FF00] mr-3" size={20} /> Implementação rápida
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Search className="text-[#00FF00] mr-3" size={20} /> Suporte nativo em português
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Server className="text-[#00FF00] mr-3" size={20} /> Infraestrutura escalável
                        </li>
                    </ul>
                </div>
                
                <img src={product.image} alt={product.title} className="rounded-2xl shadow-2xl border border-white/10 w-full" />
            </div>
        </div>
      </div>
    </Layout>
  );
}
