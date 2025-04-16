import { useState, useEffect, useRef } from 'react';
import GlowCard from '../GlowCard';

// Sample client data
const clients = [
  {
    id: 1,
    name: "Adobe",
    logo: "/images/company-logo-6.png"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/images/company-logo-2.png"
  },
  {
    id: 3,
    name: "Docker",
    logo: "/images/company-logo-4.png"
  },
  {
    id: 4,
    name: "Hostinger",
    logo: "/images/company-logo-5.png"
  },
  {
    id: 5,
    name: "Appwrite",
    logo: "/images/company-logo-7.png"
  },
  {
    id: 6,
    name: "loom",
    logo: "/images/company-logo-11.png"
  }
];

const ClientSectionPreview = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            // Optional: Unobserve after animation triggers to prevent repeating
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust this to trigger earlier/later
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 rounded-lg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-black mb-4 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 1s ease-out' }}
          >
            Trusted by Industry Leaders
          </h2>
          <p 
            className={`text-lg text-gray-600 max-w-2xl mx-auto ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 1s ease-out 0.2s' }}
          >
            We're proud to work with organizations of all sizes across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-8 lg:px-12">
          {clients.map((client, index) => (
            <GlowCard key={client.id} card={client} index={index}> 
            <div 
              className={`flex items-center justify-center p-4 bg-black rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ 
                transition: `all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67) ${0.3 + index * 0.1}s`,
                transform: animate ? `scale(1)` : 'scale(0.9)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div className="h-12 w-full flex items-center flex-col justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-12 md:h-12 object-contain"
                  loading="lazy"
                />
                <p className="text-gray-400 font-medium">{client.name}</p>
              </div>
            </div>
            </GlowCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <p 
            className={`text-gray-500 italic ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 1s ease-out 0.8s' }}
          >
            "Working with this team has transformed our business. The solutions they delivered exceeded our expectations."
          </p>
          <p 
            className={`font-semibold mt-3 text-black ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 1s ease-out 0.9s' }}
          >
            John Smith, CEO of Industry Corp
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSectionPreview;