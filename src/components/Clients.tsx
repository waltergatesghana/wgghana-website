import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "•	Sikapa Co-operative- Financial Engineering and Consultancy",
      logo: "/sikapa.jpg",
    },
    {
      name: "Total Energies",
      logo: "/TotalEnergies.png",
    },
    {
      name: "World Bank",
      logo: "/worldbank.png",
    },
    {
      name: "National Entrepreneurship and Innovation Programme (NEIP)",
      logo: "/neip.png",
    },
    {
      name: "Ghana Road Transport Coordinating Council (GRTCC)",
      logo: "/grtcc.jpg",
    },
    {
      name: "Council of Indigenous Business Association (CIBA)",
      logo: "/ciba.jpg",
    },
    {
      name: "Bank of Ghana",
      logo: "/bog.jpeg",
    },
    {
      name: "Ecobank Ghana",
      logo: "/ecobank.jpg",
    },
  ];

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-12 md:py-16 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm font-semibold text-[#2596be] tracking-widest uppercase mb-2">
            Trusted By Leading Organizations
          </p>
        
          
        </div>
      </div>

      {/* Infinite Scrolling Clients Carousel */}
      <div className="relative w-full overflow-hidden mt-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-12 md:w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-12 md:w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 sm:w-48 md:w-60 h-20 sm:h-24 md:h-28 flex items-center justify-center mx-4 md:mx-8 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientsSection;