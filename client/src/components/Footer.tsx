import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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
    Empresa: [
      { label: "Sobre Nós", href: "/about" },
      { label: "Missão, Visão, Valores", href: "/about" },
      { label: "Carreiras", href: "/careers" },
      { label: "Contato", href: "/contact" },
    ],
    Recursos: [
      { label: "Blog", href: "/blog" },
      { label: "Cases de Sucesso", href: "/cases" },
      { label: "Integrações", href: "/partners" },
      { label: "Suporte", href: "/support" },
    ],
  };

  return (
    <footer className="bg-[#02040A] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#0056D2]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <a className="block mb-6">
                <img src="/images/mediaportal_logo.webp" alt="Media Portal" className="h-10 w-auto brightness-200 contrast-200" />
              </a>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Gestão inteligente de ativos digitais. Transformamos a maneira como empresas de mídia armazenam, gerenciam e distribuem seu conteúdo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00FF00] hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00FF00] hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00FF00] hover:text-black transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00FF00] hover:text-black transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#00FF00] inline-block pb-1">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <a className="text-gray-400 hover:text-[#00FF00] transition-colors text-sm font-medium">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
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
