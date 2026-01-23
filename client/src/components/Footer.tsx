import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: "Live Production", href: "/products/live-production" },
      { label: "Graphics", href: "/products/graphics" },
      { label: "Cloud Production", href: "/products/cloud" },
      { label: "Automation", href: "/products/automation" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/cases" },
      { label: "Events", href: "/events" },
      { label: "Support", href: "/support" },
    ],
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <a className="text-3xl font-bold text-[#FF5F00] mb-6 block">vizrt</a>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering stories everywhere. Vizrt delivers the visual storytelling tools that define the future of media.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-[#FF5F00] transition-colors"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-[#FF5F00] transition-colors"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-[#FF5F00] transition-colors"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-[#FF5F00] transition-colors"></div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <a className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Vizrt. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy"><a className="hover:text-white">Privacy Policy</a></Link>
            <Link href="/terms"><a className="hover:text-white">Terms of Use</a></Link>
            <Link href="/cookies"><a className="hover:text-white">Cookie Settings</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
