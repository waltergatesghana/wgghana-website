"use client";
import React, { useState, MouseEvent, useEffect } from "react";
import { Lightbulb, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { solutionsSections } from "@/src/data/solutionsData";

interface Solution {
  id?: number;
  name: string;
  image: string;
  category?: string;
  description: string;
  link: string;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
  tryLink?: string;
}

interface SolutionCardProps {
  solution: Solution;
  isActive: boolean;
  onClick: () => void;
}

const SolutionCard = ({ solution, isActive, onClick }: SolutionCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={solution.image}
          alt={solution.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Black to transparent overlay on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
          }`}
        />
        
        {/* Content Overlay */}
        <div 
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'
          }`}
        >
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-full">
              {solution.category}
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{solution.name}</h3>
          
          <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-3">
            {solution.description}
          </p>
          
          {/* Action Button - Navigate to Details */}
          {solution.id && (
            <Link href={`/solutions/${solution.id}`} className="w-fit pointer-events-auto">
              <button className="flex items-center gap-2 w-fit px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 hover:gap-3 group/btn z-10">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </Link>
          )}
        </div>

        {/* Solution name badge - always visible when not active */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 transition-opacity duration-300 pointer-events-none ${
            isActive ? 'opacity-0' : 'opacity-100 lg:group-hover:opacity-0'
          }`}
        >
          <h3 className="text-lg md:text-xl font-bold mb-1">{solution.name}</h3>
          <p className="text-xs md:text-sm text-gray-300 flex items-center gap-1">
            View Details <ExternalLink className="w-3 h-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

const SolutionsPage = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Our Solutions";
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      // Pause after typing or clearing
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(!isTyping);
      }, 2000); // Pause for 2 seconds
    } else if (isTyping) {
      // Typing effect
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 100); // Type each character every 100ms
      } else {
        setIsPaused(true);
      }
    } else {
      // Clearing effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Clear faster - every 50ms
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, isPaused]);

  return (
    <div id="solutions" className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80)" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="animate-fadeInUp">
            <h1 className="font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-widest uppercase mb-4 min-h-[4rem] md:min-h-[6rem] lg:min-h-[7rem] flex items-center justify-center">
              {displayedText}
              <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-[#2596be] ml-2 animate-pulse"></span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
              Innovative solutions tailored to drive your business forward
            </p>
          </div>
          
          {/* Icon */}
          <div className="text-center mt-6">
            <button className="text-[#2596be] hover:scale-110 transition-transform">
              <Lightbulb className="w-10 h-10 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Solutions Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {solutionsSections.map((section) => (
            <div 
              key={section.title} 
              className="mb-16 last:mb-0"
            >
              <div className="text-center mb-10">
                <h2 className="font-bold text-2xl md:text-4xl mb-3 text-gray-800 uppercase tracking-wider">
                  {section.title}
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.solutions.map((solution) => (
                  <div key={solution.name} className="w-full">
                    <SolutionCard 
                      solution={solution} 
                      isActive={activeCardId === solution.name}
                      onClick={() => setActiveCardId(activeCardId === solution.name ? null : solution.name)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;