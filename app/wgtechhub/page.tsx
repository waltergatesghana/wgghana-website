"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ExternalLink, ChevronLeft, ChevronRight, TrendingUp, Users, Award, Lightbulb, Code, Zap, Target } from "lucide-react";
import Link from "next/link";
import { galleryImages, smes, hubStats, hubInfo } from "@/src/data/wgTechHubData";

export default function WGTechHubPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "WG Tech Hub";
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000, startCounting: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!startCounting) return;
      
      let startTime: number | null = null;
      let animationFrame: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startCounting]);
    
    return count;
  };
  
  const [startCounter, setStartCounter] = useState(false);
  const smeCount = useCounter(hubStats.totalSMEs, 2000, startCounter);
  const tradersCount = useCounter(hubStats.femaleTraders, 2500, startCounter);
  const farmersCount = useCounter(hubStats.cocoaFarmers, 3000, startCounter);

  const slides = [
    {
      image: '/gal1.jpeg',
    },
    {
      image: '/gal2.jpg',
    },
    {
      image: '/gal3.png',
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(!isTyping);
      }, 2000);
    } else if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, isPaused]);

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
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Development",
      description: "We foster a culture of continuous innovation, developing cutting-edge solutions that address real-world challenges."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Acceleration",
      description: "Build and nurture talented tech professionals through mentorship, training, and hands-on project experience."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technology Solutions",
      description: "Develop scalable software solutions and digital products that power businesses across various sectors."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast-Track Growth",
      description: "Accelerate your tech startup or innovation project with our resources, expertise, and network support."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Deliver excellence through rigorous testing, code reviews, and adherence to industry best practices."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Focus",
      description: "Connect with market opportunities and build products that resonate with African and global audiences."
    }
  ];

  const services = [
    {
      title: "Software Development Training",
      description: "Comprehensive programs in web development, mobile app development, and advanced programming concepts."
    },
    {
      title: "Tech Startup Acceleration",
      description: "Support and mentorship for tech entrepreneurs to turn ideas into viable, scalable products."
    },
    {
      title: "Custom Software Solutions",
      description: "Develop bespoke software solutions tailored to your business needs and technical requirements."
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on technology strategy, architecture, and implementation of complex systems."
    },
    {
      title: "Innovation Workshops",
      description: "Interactive sessions designed to inspire creativity and problem-solving in technology teams."
    },
    {
      title: "Code Mentorship",
      description: "One-on-one and group mentoring sessions with experienced developers and tech architects."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-gray-900">
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
                alt="WG Tech Hub"
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
                  Accelerating Innovation and Building Tech Talent
                </p>
                <h1 className="font-bricolage text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight min-h-[4rem] md:min-h-[6rem] flex items-center justify-center">
                  {displayedText}
                  <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-[#2596be] ml-2 animate-pulse"></span>
                </h1>
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

      {/* Introduction Section with Merged Stats */}
      <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Introduction Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Waltergates Tech Innovation Hub
            </h2>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our goal is to keep developing cutting-edge technology to incubate and accelerate SMEs, enabling them to achieve 
              financial independence, access new markets, and accelerate growth.
            </p>
          </motion.div>

          {/* Animated Stats Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setStartCounter(true)}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* SMEs Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2596be]/10 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2596be] to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-800 mb-3">
                  {smeCount.toLocaleString()}+
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">SMEs in Acceleration</div>
                <p className="text-sm text-gray-500">Empowering small and medium enterprises across Ghana</p>
              </div>
            </motion.div>

            {/* Female Traders Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-800 mb-3">
                  {tradersCount.toLocaleString()}+
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Female Market Traders</div>
                <p className="text-sm text-gray-500">Supporting women entrepreneurs in local markets</p>
              </div>
            </motion.div>

            {/* Cocoa Farmers Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-800 mb-3">
                  {farmersCount.toLocaleString()}+
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Cocoa Farmers On-boarded</div>
                <p className="text-sm text-gray-500">Transforming agriculture through technology</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#2596be] to-blue-600 text-white px-8 py-6 rounded-2xl shadow-xl">
              <p className="text-xl font-semibold">
                Our Goal: Accelerate <span className="text-3xl font-bold">{hubStats.accelerationGoal.toLocaleString()}+</span> SMEs over the next 2.5 years
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section - Masonry Style */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-12 text-center"
        >
          Our Gallery
        </motion.h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid mb-4"
            >
              <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <span className="text-sm bg-[#2596be] px-3 py-1 rounded-full">{item.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SMEs Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4 text-center"
          >
            SMEs Under WG Tech Innovation Hub
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We proudly support a diverse range of SMEs across various sectors, empowering them with technology, training, and access to markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smes.map((sme, index) => (
              <motion.div
                key={sme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#2596be]"
              >
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={sme.image}
                    alt={sme.name}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{sme.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{sme.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-[#2596be] flex-shrink-0 mt-0.5" />
                      <span>{sme.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone className="w-4 h-4 text-[#2596be] flex-shrink-0" />
                      <a href={`tel:${sme.contact}`} className="hover:text-[#2596be] transition-colors">
                        {sme.contact}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {sme.socials.facebook && (
                        <a href={sme.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2596be] transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {sme.socials.twitter && (
                        <a href={sme.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2596be] transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {sme.socials.linkedin && (
                        <a href={sme.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2596be] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {sme.socials.instagram && (
                        <a href={sme.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2596be] transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    {sme.website && (
                      <a href={sme.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[#2596be] hover:text-blue-700 font-medium transition-colors">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#2596be] to-blue-700 rounded-2xl p-12 text-center text-white mx-4 my-20 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Join the Tech Revolution</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Whether you're a startup seeking acceleration, a business needing tech solutions, or an SME ready to grow, 
          WG Tech Hub is here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all"
            >
              Get In Touch
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2596be] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
            >
              Explore Services
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
