"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServicesSwiper from '@/src/components/Services';
import Clients from '@/src/components/Clients';
import FeaturesSection from '@/src/components/Feature';
import ParallaxHomeSection from '@/src/components/ParallaxHomeSection';
import BlogSection from '@/src/components/BlogSection';

const CounterStats = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, team: 0 });

  useEffect(() => {
    const targets = { projects: 500, clients: 1200, years: 15, team: 50 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        team: Math.floor(targets.team * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 md:py-16 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2596be] mb-2">{counts.projects}+</div>
              <div className="text-gray-700 text-sm md:text-base font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2596be] mb-2">{counts.clients}+</div>
              <div className="text-gray-700 text-sm md:text-base font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2596be] mb-2">{counts.years}+</div>
              <div className="text-gray-700 text-sm md:text-base font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2596be] mb-2">{counts.team}+</div>
              <div className="text-gray-700 text-sm md:text-base font-medium">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
  {
    image: '/herofour.jpg',
    subtitle: ' Innovative IT Solutions',
  },
  {
    image: '/herotwo.jpg',
    subtitle: ' Reliable Software & Digital Services',
  },
  {
    image: '/herothree.jpg',
    subtitle: ' Web, Mobile & Enterprise Systems',
  },
  {
    image: '/heroone.png',
    subtitle: ' Powering Africa’s Digital & Sustainable Future',
  },
  {
    image: '/herofive.jpg',
    subtitle: ' Secure, Scalable & Smart Solutions',
  },
  {
    image: '/herosix.jpg',
    subtitle: ' Innovation, Integrity & Performance',
  },
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-changes every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

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

  return (
    <div>
      <div className="relative w-full h-[75vh] md:h-screen overflow-hidden bg-gray-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Zoom Animation */}
            <div className={`absolute inset-0 ${index === currentSlide ? 'animate-zoom' : ''}`}>
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="w-full h-full object-cover brightness-75"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
              <div
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-lg md:text-xl mb-4 text-center font-medium tracking-wide">
                  {slide.subtitle}
                </p>
                <h1 className=" font-bricolage text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
                  Waltergates Ghana Limited
                </h1>
                <div className="flex justify-center">
                  <a
                    href="/services"
                    className="bg-[#2596be] hover:bg-[#fb0522] hover:text-amber-50 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                  >
                    Explore Our Services
                    <span className="text-xl">+</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Desktop Only */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full transition-all duration-300 items-center justify-center group shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full transition-all duration-300 items-center justify-center group shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 800);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-[#2596be]'
                  : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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

      <CounterStats />
      <ServicesSwiper/>
      <FeaturesSection/>
      <ParallaxHomeSection/>
      <Clients />
      <BlogSection />
    </div>
  );
};

export default HeroSlider;