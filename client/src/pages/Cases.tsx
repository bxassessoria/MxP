import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    client: "BBC Sport",
    title: "Virtual Studio Revolution",
    desc: "How BBC Sport used Vizrt's virtual studio technology to transform their Tokyo 2020 coverage.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    client: "CNN",
    title: "Election Night Graphics",
    desc: "Powering the most data-intensive night in news with real-time, augmented reality graphics.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    client: "Riot Games",
    title: "Esports Live Production",
    desc: "Delivering broadcast-quality esports tournaments to millions of concurrent viewers.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    client: "Sky News",
    title: "Cloud-First Newsroom",
    desc: "Migrating a 24/7 news operation to the cloud for unparalleled flexibility and resilience.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop"
  },
  {
    client: "NASA",
    title: "Mission Control Live",
    desc: "Bringing the excitement of space exploration to Earth with high-fidelity live streams.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    client: "Weather Channel",
    title: "Immersive Weather Reports",
    desc: "Using mixed reality to explain complex weather phenomena safely and clearly.",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Cases() {
  return (
    <Layout>
      <div className="bg-gray-900 text-white py-24">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Stories</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            See how the world's leading media organizations use Vizrt to tell better stories.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-md mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="flex flex-col h-full">
                <div className="text-[#FF5F00] font-bold text-sm tracking-wider uppercase mb-2">{item.client}</div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF5F00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-auto flex items-center font-bold text-[#1A1A1A] group-hover:text-[#FF5F00] transition-colors">
                  Read Story <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
