import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Produto", href: "/products" },
    { label: "Integrações", href: "/partners" },
    { label: "Cases", href: "/cases" },
    { label: "Sobre", href: "/about" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2 group">
            {/* Logo Original Colors for White Background */}
            <img src="/images/mediaportal_logo.webp" alt="Media Portal" className="h-10 md:h-12 w-auto transition-all" />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a className={`text-sm font-bold tracking-wide uppercase transition-all hover:text-[#EE6025] ${
                  location === item.href ? "text-[#EE6025]" : "text-[#263858]"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
             <Button className="bg-[#EE6025] hover:bg-[#d55015] text-white font-bold rounded-md px-6 shadow-md transition-all">
              Entrar em contato
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#263858] focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="container py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a 
                  className="text-lg font-bold text-[#263858] hover:text-[#EE6025] block py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact">
                <Button className="w-full bg-[#EE6025] hover:bg-[#d55015] text-white font-bold rounded-md py-4">
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
