import { Link } from "wouter";
import { Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#263858] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div>
            <div className="bg-white p-2 w-fit rounded mb-6">
                <img src="/images/logo.jpg" alt="Media Portal" className="h-10" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Fluxos digitais inteligentes. Transformando a gestão de acervos com tecnologia e inovação desde 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#EE6025] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#EE6025] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#EE6025] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#EE6025] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#EE6025]">Empresa</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link href="/cases" className="hover:text-white transition-colors">Cases de Sucesso</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors">Integrações</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#EE6025]">Soluções</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/products/cloudfly" className="hover:text-white transition-colors">CloudFly</Link></li>
              <li><Link href="/products/gems-in-a-box" className="hover:text-white transition-colors">Gems in a Box</Link></li>
              <li><Link href="/products/gendai-tv" className="hover:text-white transition-colors">Gendai TV</Link></li>
              <li><Link href="/seo/mam" className="hover:text-white transition-colors">O que é MAM?</Link></li>
              <li><Link href="/seo/dam" className="hover:text-white transition-colors">O que é DAM?</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#EE6025]">Contato</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#EE6025] shrink-0 mt-0.5" />
                <span>Praça Dom José Gaspar nº 30 – 20º andar, República – São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#EE6025] shrink-0" />
                <span>+55 (11) 3063 4411</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#EE6025] shrink-0" />
                <span>contato@mediaportal.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Media Portal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
