import Layout from "@/components/Layout";
import { Link } from "wouter";

const posts = [
  {
    title: "The Future of Cloud Production in 2026",
    category: "Trends",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    excerpt: "How cloud technologies are reshaping the broadcast landscape and enabling remote workflows."
  },
  {
    title: "5 Tips for Engaging Sports Graphics",
    category: "Tutorials",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Learn how to use real-time data to create compelling visual stories for sports fans."
  },
  {
    title: "Vizrt at ISE 2026: What to Expect",
    category: "Events",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Join us in Barcelona to see the latest innovations in live production technology."
  },
  {
    title: "Case Study: Global News Network",
    category: "Case Studies",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop",
    excerpt: "How a major news network streamlined their operations with Vizrt automation."
  },
  {
    title: "Understanding NDI 6.0",
    category: "Technology",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "A deep dive into the latest features of the NDI protocol and what it means for IP video."
  },
  {
    title: "Virtual Sets vs. Augmented Reality",
    category: "Graphics",
    date: "Dec 01, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Choosing the right immersive technology for your studio production."
  }
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">Latest Insights</h1>
            <p className="text-xl text-gray-600">
              News, trends, and stories from the world of visual storytelling and live production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF5F00] text-white text-xs font-bold px-2 py-1 rounded-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF5F00] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-[#FF5F00] font-semibold text-sm group-hover:underline">Read Article</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
