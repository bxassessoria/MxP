import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useRoute } from "wouter";

const productData: Record<string, { title: string; desc: string; features: string[]; image: string }> = {
  "live-production": {
    title: "Live Production",
    desc: "The world's most complete software-defined visual storytelling tools for live media production.",
    features: ["Software-defined switching", "Integrated graphics", "Multi-format support", "Flexible I/O"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  "graphics": {
    title: "Graphics",
    desc: "Captivate your audience with data-driven, real-time 3D graphics and maps.",
    features: ["Real-time rendering", "Data integration", "Augmented Reality (AR)", "Virtual Sets"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  "cloud": {
    title: "Cloud Production",
    desc: "Produce live content from anywhere with secure, scalable cloud workflows.",
    features: ["Remote production", "Scalable resources", "Secure transmission", "Browser-based tools"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  "automation": {
    title: "Automation",
    desc: "Reduce complexity and errors with advanced studio automation systems.",
    features: ["Playlist management", "Device control", "Template-based workflows", "Redundancy"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  "mam": {
    title: "Media Asset Management",
    desc: "Take control of your media assets with powerful search and management tools.",
    features: ["Metadata tagging", "Fast search", "Archive management", "Workflow orchestration"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  },
  "sports-analysis": {
    title: "Sports Analysis",
    desc: "Enhance sports coverage with top-tier analysis and telestration tools.",
    features: ["3D replay", "Virtual advertising", "Player tracking", "Game analysis"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const productId = params?.id || "";
  const product = productData[productId];

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
            <img src={product.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <Link href="/products">
            <a className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Products
            </a>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{product.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            {product.desc}
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-[#FF5F00] hover:bg-orange-600 text-white font-semibold px-8 py-3 h-auto text-lg rounded-sm">
                Request Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Key Features</h2>
                <div className="space-y-6">
                    {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                            <CheckCircle2 className="text-[#FF5F00] mt-1 mr-4 shrink-0" size={24} />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
                <img src={product.image} alt={product.title} className="rounded shadow-lg w-full" />
            </div>
        </div>
      </div>
    </Layout>
  );
}
