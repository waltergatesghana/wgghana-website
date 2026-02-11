"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: "Our Solutions", href: "/solutions" },
    { name: 'Blog', href: '/blog' },
    { name: 'WG Tech Hub', href: '/wgtechhub' },
    // { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-black shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
                   {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/home" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Waltergates Limited" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className={`font-bold text-xl transition-colors duration-500 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}>
                  Waltergates
                </h2>
                <p className={`text-sm transition-colors duration-500 ${
                  isScrolled ? 'text-gray-300' : 'text-gray-200'
                }`}>
                  Ghana Limited
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-md font-medium transition-all duration-300 font-bricolage hover:text-[#2596be] relative group ${
                    isScrolled ? 'text-gray-200' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fb0522] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="/contact">
              <button className="bg-[#2596be] hover:bg-[#d32e41] hover:text-amber-50 text-black font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-white hover:bg-gray-800' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 pt-2 pb-6 space-y-3 ${
          isScrolled ? 'bg-black' : 'bg-black/95 backdrop-blur-sm'
        }`}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium font-bricolage text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* < a href="/contact">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300">
            Get Quote
          </button>
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;