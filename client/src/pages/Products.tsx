import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    title: "Live Production",
    desc: "Create more content, easier. Live production tools for every story.",
    link: "/products/live-production",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Graphics",
    desc: "Engage your audience with stunning real-time 3D graphics.",
    link: "/products/graphics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cloud Production",
    desc: "Flexible, scalable, and secure cloud-based live production.",
    link: "/products/cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Automation",
    desc: "Streamline workflows and reduce errors with intelligent automation.",
    link: "/products/automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "MAM",
    desc: "Media Asset Management to organize, search, and distribute content.",
    link: "/products/mam",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sports Analysis",
    desc: "In-depth sports analysis and telestration tools.",
    link: "/products/sports-analysis",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-24">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover the tools that power the world's most compelling stories. From live production to graphics and cloud workflows.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.title} href={product.link}>
              <a className="group block overflow-hidden border border-gray-100 rounded-sm hover:shadow-lg transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF5F00] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.desc}</p>
                  <div className="flex items-center text-[#FF5F00] font-bold text-sm">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need help choosing?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts can help you find the right solution for your specific production needs and budget.
          </p>
          <Button className="bg-[#FF5F00] hover:bg-orange-600 text-white font-semibold px-8 py-3 h-auto text-lg rounded-sm">
            Contact Sales
          </Button>
        </div>
      </div>
    </Layout>
  );
}
