import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown, Lightbulb, Target, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: 'why2.png',
    },
    {
      image: 'herotwo.jpg',
    },
    {
      image: 'hero-bg.jpg',
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We pioneer inventive tech advancements, delivering client-centric and cutting-edge solutions.'
    },
    {
      icon: Target,
      title: 'Operational Excellence',
      description: 'Streamlined processes, ensuring efficiency, reliability, and consistent, high-quality performance.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Approach',
      description: 'Thoughtful planning, adapting dynamic strategies, ensuring long-term success and client satisfaction.'
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Image Slider */}
          <div className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`absolute inset-0 ${index === currentSlide ? 'animate-zoom' : ''}`}>
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Vertical Navigation Arrows */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-[#d32e41] text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-white hover:bg-[#d32e41] text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Slide Indicator */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-gray-900 font-bold text-lg">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-[#2596be] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 leading-tight">
                Why Choose Waltergates
              </h2>
              
             

              {/* Features List */}
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <feature.icon className="w-6 h-6 text-red-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-zoom {
          animation: zoom 8s ease-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;