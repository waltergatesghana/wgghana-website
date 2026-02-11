import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section - Logo, Address, Location, Social Icons, Phone */}
          <div className="space-y-6">
          {/* Logo */}
            <div className="mb-4 flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Waltergates Limited" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-white font-bold text-xl">Waltergates</h2>
                <p className="text-gray-400 text-sm">Ghana Limited</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm leading-relaxed">
                  24th Street, New Achimota, Accra, Ghana
                </p>
              </div>
            </div>

         {/* Phone Numbers */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+233509405989" className="text-sm hover:text-blue-400 transition-colors">
                  +233 509 405 989
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@wgghana.com" className="text-sm hover:text-blue-400 transition-colors">
                  info@wgghana.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:waltergatesghanalimited@gmail.com" className="text-sm hover:text-blue-400 transition-colors">
                  waltergatesghanalimited@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/home" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-blue-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-sm hover:text-blue-400 transition-colors">
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/wgtechhub" className="text-sm hover:text-blue-400 transition-colors">
                  WG Tech Hub
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Payment Aggregation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Bulk SMS & USSD SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                Software Development & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                 Financial software developers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                 ID Card Digitalization
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-sm hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Waltergates Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}