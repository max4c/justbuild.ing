import Image from 'next/image';
import ResponsiveImage from '@/components/ResponsiveImage';

interface Founder {
  name: string;
  role: string;
  image: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const founders: Founder[] = [
  {
    name: "Jacob Wright",
    role: "Co-founder",
    image: "/assets/jacob.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/jacob-c-wright/",
      twitter: "https://x.com/jehovahscript",
      website: "https://www.jacobwright.xyz/"
    }
  },
  {
    name: "Max Forsey",
    role: "Co-founder", 
    image: "/assets/max.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/max-forsey/",
      twitter: "https://x.com/max4c_",
      website: "https://maxforsey.com"
    }
  }
];

export default function ContactPage() {
  return (
    <div className="bg-tertiary min-h-screen">
      {/* Contact Section */}
      <section className="pt-32 md:pt-48 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <h1 className="text-6xl font-semibold text-gray-900 text-center mb-8 md:mb-12">
            Contact Us
          </h1>
          
          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="mb-6">
                  <a href={founder.links.twitter} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src={founder.image} 
                      alt={founder.name}
                      width={120}
                      height={120}
                      className="w-20 h-20 md:w-[120px] md:h-[120px] rounded-full object-cover border-4 border-gray-100 mx-auto"
                    />
                  </a>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-gray-600 italic mb-4 md:mb-6">{founder.role}</p>
                <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
                  {founder.links.linkedin && (
                    <a 
                      href={founder.links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-2 md:px-4 bg-tertiary rounded-lg text-gray-900 font-medium text-sm md:text-base hover:bg-gray-200 hover:-translate-y-0.5 transition-all"
                    >
                      LinkedIn
                    </a>
                  )}
                  {founder.links.twitter && (
                    <a 
                      href={founder.links.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-2 md:px-4 bg-tertiary rounded-lg text-gray-900 font-medium text-sm md:text-base hover:bg-gray-200 hover:-translate-y-0.5 transition-all"
                    >
                      X (Twitter)
                    </a>
                  )}
                  {founder.links.website && (
                    <a 
                      href={founder.links.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-2 md:px-4 bg-tertiary rounded-lg text-gray-900 font-medium text-sm md:text-base hover:bg-gray-200 hover:-translate-y-0.5 transition-all"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Methods */}
          <div className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <a 
              href="mailto:hello@justbuild.ing" 
              className="text-xl text-bridge-500 font-semibold hover:underline inline-block mb-4"
            >
              hello@justbuild.ing
            </a>
            
            <div className="border border-bridge-500 rounded-lg p-4 mt-4">
              <p className="text-gray-600 text-sm">
                We respond to DMs much faster on X(Twitter). Feel free to reach out to us directly there for quicker responses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}