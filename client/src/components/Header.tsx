import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Resources", href: "/blog" },
    { label: "Partners", href: "/partners" },
    { label: "Company", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#FF5F00]">vizrt</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href}>
                    <a className={`text-sm font-medium transition-colors hover:text-[#FF5F00] ${
                      location === item.href ? "text-[#FF5F00]" : "text-gray-700"
                    }`}>
                      {item.label}
                    </a>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
             <Button className="bg-[#FF5F00] hover:bg-orange-600 text-white font-semibold rounded-sm">
              Contact Sales
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a 
                  className="text-base font-medium text-gray-700 hover:text-[#FF5F00] block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact">
                <Button className="w-full bg-[#FF5F00] hover:bg-orange-600 text-white font-semibold rounded-sm">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
