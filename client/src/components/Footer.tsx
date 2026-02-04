import { Link } from "wouter";
import { Facebook, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#263858] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white p-2 inline-block rounded mb-6">
                <img src="/MediaPortal.jpg" alt="Media Portal" className="h-8 w-auto" />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              Fluxos digitais inteligentes para gestão de acervos e monetização de conteúdo.
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
            <h3 className="font-bold text-white text-lg mb-6 border-l-4 border-[#EE6025] pl-3">Navegação</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li><Link href="/" className="hover:text-[#EE6025] transition-colors">Home</Link></li>
              <li><Link href="/produtos" className="hover:text-[#EE6025] transition-colors">Produtos</Link></li>
              <li><Link href="/integracoes" className="hover:text-[#EE6025] transition-colors">Integrações</Link></li>
              <li><Link href="/cases" className="hover:text-[#EE6025] transition-colors">Cases</Link></li>
              <li><Link href="/blog" className="hover:text-[#EE6025] transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-[#EE6025] transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Produtos */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 border-l-4 border-[#EE6025] pl-3">Soluções</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li><Link href="/produtos/gems-in-a-box" className="hover:text-[#EE6025] transition-colors">On Premises</Link></li>
              <li><Link href="/produtos/cloudfly" className="hover:text-[#EE6025] transition-colors">Cloud</Link></li>
              <li><Link href="/produtos/cloudlink" className="hover:text-[#EE6025] transition-colors">Híbridas</Link></li>
              <li><Link href="/produtos/gendai-tv" className="hover:text-[#EE6025] transition-colors">Gendai TV</Link></li>
              <li><Link href="/produtos/gendai-news" className="hover:text-[#EE6025] transition-colors">Gendai News</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-white text-lg mb-6 border-l-4 border-[#EE6025] pl-3">Contato</h3>
            <ul className="space-y-4 text-gray-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#EE6025] mt-1 shrink-0" />
                <span>
                  Praça Dom José Gaspar nº 30 – 20º andar<br/>
                  República – São Paulo/SP<br/>
                  CEP 01047-010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#EE6025] shrink-0" />
                <span>
                  +55 (11) 9 4389 6879<br/>
                  +55 (11) 3063 4411
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#EE6025] shrink-0" />
                <span>comercial@mediaportal.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Media Portal. Todos os direitos reservados. | <Link href="/painel" className="hover:text-gray-200 transition-colors">Acesso Restrito</Link></p>
        </div>
      </div>
    </footer>
  );
}
