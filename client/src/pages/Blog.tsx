import Layout from "@/components/Layout";
import { Link } from "wouter";

const posts = [
  {
    title: "Media Portal celebra balanço positivo em 2024",
    category: "Notícias",
    date: "20 Nov 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Com projetos de destaque e expansão de negócios, a Media Portal encerra o ano com crescimento expressivo no mercado broadcast."
  },
  {
    title: "16 anos de inovação e excelência",
    category: "Institucional",
    date: "15 Out 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Celebramos mais de uma década e meia transformando a gestão de ativos digitais no Brasil e no mundo."
  },
  {
    title: "Canal UOL amplia cobertura e estreia na Vivo TV",
    category: "Clientes",
    date: "10 Set 2024",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop",
    excerpt: "O Canal UOL, cliente Media Portal, expande sua distribuição alcançando milhões de novos telespectadores."
  },
  {
    title: "A importância da IA na catalogação de vídeos",
    category: "Tecnologia",
    date: "05 Ago 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    excerpt: "Como algoritmos de inteligência artificial estão revolucionando a velocidade de busca em grandes acervos."
  },
  {
    title: "Media Portal na SET Expo 2024",
    category: "Eventos",
    date: "25 Jul 2024",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Confira os destaques da nossa participação no maior evento de broadcast e novas mídias da América Latina."
  },
  {
    title: "Segurança de dados na nuvem híbrida",
    category: "Segurança",
    date: "12 Jun 2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Melhores práticas para proteger seu acervo digital em ambientes híbridos e multi-cloud."
  }
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-[#02040A] text-white py-24 border-b border-white/5">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Blog Media Portal</h1>
          <p className="text-xl text-gray-300">
            Notícias, tendências e novidades sobre o mercado de broadcast e tecnologia.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00FF00]/50 transition-all group cursor-pointer hover:transform hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#00FF00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-mono">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF00] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-[#00FF00] font-bold text-sm uppercase tracking-wider group-hover:underline decoration-[#00FF00] underline-offset-4">Ler Artigo Completo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
