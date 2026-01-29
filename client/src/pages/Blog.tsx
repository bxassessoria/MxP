import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#263858] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/blog-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#263858]/80 to-[#263858]/95"></div>
        
        <div className="container relative z-10 text-center">
          <div className="mb-8">
             <Link href="/">
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 pl-0">
                    <ArrowLeft size={16} className="mr-2" /> Voltar para Home
                </Button>
            </Link>
          </div>
          
          <span className="text-[#EE6025] font-bold tracking-widest uppercase text-sm mb-4 block">Blog Media Portal</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights para gestão inteligente de acervos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Fique por dentro das novidades, tendências e informações do universo Broadcast.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Input 
              type="text" 
              placeholder="Pesquisar artigos..." 
              className="h-14 pl-12 pr-4 rounded-full bg-white text-gray-900 border-none shadow-lg focus:ring-2 focus:ring-[#EE6025] text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-56 overflow-hidden cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#EE6025] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                        {post.category}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4 font-medium uppercase tracking-wide">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-[#EE6025]" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1 text-[#EE6025]" />
                        {post.author}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-[#263858] mb-3 group-hover:text-[#EE6025] transition-colors cursor-pointer line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-[#EE6025] font-bold hover:no-underline group-hover:translate-x-1 transition-transform mt-auto self-start">
                        Ler mais <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-500 text-lg mb-6">Tente buscar por outros termos ou palavras-chave.</p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#EE6025] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10"></div>
        <div className="container text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mantenha-se informado</h2>
          <p className="text-white/90 mb-8 text-lg">
            Receba em primeira mão artigos, tendências e novidades sobre o mercado Broadcast e tecnologias de mídia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail corporativo" 
              className="bg-white text-gray-900 border-none h-14 text-lg placeholder:text-gray-400"
            />
            <Button className="bg-[#263858] hover:bg-[#1a2840] text-white font-bold h-14 px-8 text-lg shadow-lg">
              Inscrever-se
            </Button>
          </div>
          <p className="text-white/60 text-xs mt-4">
            Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
          </p>
        </div>
      </section>
    </Layout>
  );
}
