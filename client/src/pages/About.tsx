import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-[#1A1A1A] text-white py-24">
        <div className="container text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Empowering Stories Everywhere</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Vizrt delivers the visual storytelling tools that define the future of media. We help broadcasters and content creators tell better stories, faster and more efficiently.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg">
              To democratize high-quality video production and make it accessible to everyone, from major broadcasters to individual creators.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that software-defined visual storytelling is the future. By moving away from proprietary hardware to flexible, scalable software solutions, we unlock creativity and efficiency.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-lg overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team collaboration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1A1A1A]">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Michael Hallén", role: "CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
              { name: "Vanessa Walmsley", role: "Chief Commercial Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
              { name: "Ulrich Voigt", role: "Global Head of Product Management", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" }
            ].map((leader, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm shadow-sm text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">{leader.name}</h3>
                <p className="text-[#FF5F00] font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
