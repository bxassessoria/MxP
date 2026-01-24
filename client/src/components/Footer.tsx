import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Soluções: [
      { label: "CloudFly", href: "/products/cloudfly" },
      { label: "Gems in a box", href: "/products/gems-in-a-box" },
      { label: "CloudLink", href: "/products/cloudlink" },
      { label: "Custom PRJ", href: "/products/custom-prj" },
      { label: "Gendai TV", href: "/products/gendai-tv" },
      { label: "Gendai News", href: "/products/gendai-news" },
    ],
    Institucional: [
      { label: "Sobre Nós", href: "/about" },
      { label: "Missão e Valores", href: "/about#values" },
      { label: "Carreiras", href: "/careers" },
      { label: "Política de Privacidade", href: "/privacy" },
    ],
    Recursos: [
      { label: "Blog", href: "/blog" },
      { label: "Cases de Sucesso", href: "/cases" },
      { label: "Integrações", href: "/partners" },
      { label: "Suporte", href: "/support" },
    ],
  };

  return (
    <footer className="bg-[#263858] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <a className="block mb-6 bg-white w-fit p-2 rounded">
                <img src="/images/mediaportal_logo.webp" alt="Media Portal" className="h-8 w-auto" />
              </a>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed text-sm">
              Gestão inteligente de ativos digitais. Transformamos a maneira como empresas de mídia armazenam, gerenciam e distribuem seu conteúdo com segurança e eficiência.
            </p>
            
            <div className="space-y-3 mb-6 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#EE6025] shrink-0 mt-1" />
                <span>Av. Paulista, 1234 - Bela Vista<br/>São Paulo - SP, 01310-100</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#EE6025] shrink-0" />
                <span>+55 (11) 3000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#EE6025] shrink-0" />
                <span>contato@mediaportal.com.br</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#EE6025] transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#EE6025] transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#EE6025] transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#EE6025] transition-all duration-300">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base font-bold mb-6 text-white border-b-2 border-[#EE6025] inline-block pb-1">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <a className="text-gray-400 hover:text-[#EE6025] transition-colors text-sm">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Media Portal. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy"><a className="hover:text-white transition-colors">Política de Privacidade</a></Link>
            <Link href="/terms"><a className="hover:text-white transition-colors">Termos de Uso</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
