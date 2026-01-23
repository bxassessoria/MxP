import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Integrations() {
  return (
    <Layout>
      <div className="bg-[#0056D2] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Integrations & Partners</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Vizrt works seamlessly with the tools you already love. Connect, automate, and expand your production capabilities.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Adobe Premiere Pro", "Avid Media Composer", "Unreal Engine", "Unity",
            "Slack", "Microsoft Teams", "Zoom", "Skype",
            "Facebook Live", "YouTube", "Twitch", "Vimeo",
            "AWS", "Google Cloud", "Azure", "Docker"
          ].map((partner, idx) => (
            <div key={idx} className="border border-gray-200 p-8 rounded-sm flex items-center justify-center hover:border-[#FF5F00] transition-colors cursor-pointer bg-white shadow-sm hover:shadow-md h-32">
              <span className="text-lg font-bold text-gray-700">{partner}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join our ecosystem of technology partners and developers to build the future of video production together.</p>
            <Button className="bg-[#FF5F00] hover:bg-orange-600 text-white font-semibold px-8 py-3 h-auto text-lg rounded-sm">
                Apply Now
            </Button>
        </div>
      </div>
    </Layout>
  );
}
