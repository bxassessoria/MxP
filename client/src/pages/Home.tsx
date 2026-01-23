import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl mb-6">
              Transforming Viewer Experiences <span className="text-[#FF5F00]">with Technology</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Empower teams of any size to create, manage, and deliver stunning live and on-demand content with tools trusted by broadcasters and media organizations worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#FF5F00] hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-sm text-lg">
                Talk to an Expert
              </Button>
              <Button variant="outline" className="border-gray-300 text-[#1A1A1A] hover:bg-gray-50 font-semibold px-8 py-6 rounded-sm text-lg">
                Explore Industries
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-4">Supporting 3,500+ companies globally</p>
              <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Logos placeholders */}
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Geometric Mask Image Placeholder */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-bl-[100px] rounded-tr-[40px] shadow-2xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Broadcast studio environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0056D2]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#FF5F00] font-bold text-sm tracking-wider uppercase mb-2">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Innovative Solutions for<br />Every Creator, Every Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Media and Entertainment",
                desc: "Captivate audiences with innovative and engaging storytelling solutions.",
                tag: "01",
                color: "bg-[#FF5F00]",
                img: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop"
              },
              {
                title: "Sports",
                desc: "From broadcast to live streams and highlight clips, solutions that make every second count.",
                tag: "02",
                color: "bg-[#22C55E]",
                img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Enterprise",
                desc: "Empowering Organizations, Engaging People. No matter your business.",
                tag: "03",
                color: "bg-[#0EA5E9]",
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
              },
              {
                title: "Creator Economy",
                desc: "Empower Your Creators with Broadcast-Quality Tools.",
                tag: "04",
                color: "bg-[#E11D48]",
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className={`absolute bottom-4 left-4 ${item.color} text-white text-xs font-bold px-2 py-1 rounded-sm`}>
                    {item.tag}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF5F00] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center text-sm font-semibold text-[#1A1A1A] group-hover:text-[#FF5F00] transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Dark Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-500 font-bold text-xs tracking-wider uppercase mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Revolutionizing Viewer Experiences Every Day
            </h2>
            <p className="text-gray-600">
              Empowering creators everywhere to deliver immersive viewer experiences across industries, platforms, and audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Live Production and Vision Mixing",
              "Newsroom and PCR",
              "Graphics",
              "Venue Production",
              "Digital and Streaming",
              "Studio Production",
              "Virtual Townhalls and Leadership Updates",
              "Lecture Capture"
            ].map((title, idx) => (
              <div key={idx} className="bg-[#1A1A1A] p-6 rounded-sm hover:bg-[#FF5F00] transition-colors group cursor-pointer min-h-[180px] flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-bold text-lg leading-tight max-w-[80%]">{title}</h3>
                  <ArrowRight className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                </div>
                <p className="text-gray-400 text-xs group-hover:text-white/90 mt-4">
                  Scale from small shows to primetime with powerful switching, automation, and real-time graphics.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="py-16 bg-[#0056D2] text-white overflow-hidden relative">
        <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="text-blue-200 text-xs font-bold tracking-wider uppercase mb-4">Vizrt at ISE 2026</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powering the Future of Video Production.
            </h2>
            <p className="text-xl font-medium mb-6">Cloud. AI. Digital.</p>
            <p className="text-blue-100 mb-8 max-w-md">
              February 3 - 6 | Fira de Barcelona | Hall 4 Stand no. 4Q500 | Guest Pass Code: ISE261318
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-[#0056D2] hover:bg-blue-50 font-bold px-6 py-2 rounded-sm">
                Book a Meeting
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 font-bold px-6 py-2 rounded-sm">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative h-64 lg:h-full min-h-[300px]">
             {/* Image mask effect */}
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0056D2] z-10 lg:w-1/2"></div>
             <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
              alt="Conference crowd" 
              className="absolute right-0 top-0 h-full w-full lg:w-[120%] object-cover rounded-l-full border-4 border-white/10"
             />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container">
          <div className="mb-16">
             <p className="text-gray-500 font-bold text-xs tracking-wider uppercase mb-3">Metrics</p>
             <h2 className="text-3xl font-bold text-[#1A1A1A]">Shaping Experiences Globally</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "4.5bn+", label: "People interact daily with media created using our tools" },
              { val: "3500+", label: "Companies Globally use Vizrt to engage their viewers" },
              { val: "92", label: "Countries rely on our tools to engage diverse audiences" },
              { val: "600+", label: "Passionate people working to transform viewer experiences" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-[#FF5F00] mb-4">{stat.val}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gray-500 font-bold text-xs tracking-wider uppercase mb-3">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Real-World Results with Vizrt</h2>
            <Link href="/cases">
              <a className="inline-flex items-center text-sm font-bold text-[#1A1A1A] hover:text-[#FF5F00] transition-colors">
                View All Case Studies <ArrowRight size={16} className="ml-2" />
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                logo: "SHARP",
                quote: "TriCaster® and NDI® have helped us reach more audiences with tailored content.",
                bg: "bg-gray-100",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              },
              {
                logo: "Chess.com",
                quote: "Vizrt graphics tools bring chess to life for millions of viewers worldwide.",
                bg: "bg-[#0056D2]",
                text: "text-white",
                img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop"
              },
              {
                logo: "blinx",
                quote: "Creating a digital-native storytelling hub for the next generation.",
                bg: "bg-black",
                text: "text-white",
                img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((card, idx) => (
              <div key={idx} className={`relative group overflow-hidden rounded-md h-[400px] flex flex-col justify-end p-8 ${card.bg} ${card.text || 'text-[#1A1A1A]'}`}>
                 <img src={card.img} alt="Case study" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                 
                 <div className="relative z-20 transition-transform duration-300 group-hover:-translate-y-4">
                   <h3 className={`text-2xl font-serif font-bold mb-4 ${card.text ? '' : 'text-[#1A1A1A]'} group-hover:text-white`}>{card.logo}</h3>
                   <p className={`text-lg font-medium leading-snug mb-6 ${card.text ? 'opacity-90' : 'text-gray-700'} group-hover:text-white`}>"{card.quote}"</p>
                   <div className="flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                     Read Case Study <ArrowRight size={16} className="ml-2" />
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
