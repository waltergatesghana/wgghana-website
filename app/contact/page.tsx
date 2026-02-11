"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Address',
      content: '24th Street, New Achimota, Accra\nAccra, Ghana',
      color: 'blue',
      delay: 0.1
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+233 509 405 989',
      color: 'red',
      delay: 0.2
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@wgghana.com\nwaltergatesghanalimited@gmail.com',
      color: 'blue',
      delay: 0.3
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 8:00 - 17:00\nSat - Sun: Closed',
      color: 'red',
      delay: 0.4
    }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Banner Section with Image */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Optional Blue Gradient Overlay (Depth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-blue-950/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-4 tracking-tight">
            GET IN TOUCH
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Introduction Text */}
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const colorClasses =
              card.color === "blue"
                ? "bg-blue-500 hover:shadow-blue-500/20"
                : "bg-red-500 hover:shadow-red-500/20";

            return (
              <div
                key={index}
                className="
                  bg-white
                  p-3 sm:p-4 lg:p-6
                  rounded-lg sm:rounded-xl
                  border border-gray-100
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-lg
                  sm:hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div
                  className={`
                    inline-flex items-center justify-center
                    p-2 sm:p-3
                    rounded-full
                    ${colorClasses.split(" ")[0]}
                    text-white
                    mb-3 sm:mb-4
                  `}
                >
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={24} className="hidden sm:block" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="text-xs sm:text-sm text-gray-600 leading-snug sm:leading-normal whitespace-pre-line">
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 
                      rounded-lg bg-white text-gray-900
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                      hover:border-blue-300 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 
                      rounded-lg bg-white text-gray-900
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                      hover:border-blue-300 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 
                      rounded-lg bg-white text-gray-900
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                      hover:border-blue-300 transition-colors"
                    placeholder="+233 509 405 972"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="block w-full px-3 py-3 border-2 border-gray-200 
                    rounded-lg bg-white text-gray-900
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    hover:border-blue-300 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold rounded-lg text-base
                  bg-gradient-to-r from-blue-500 to-red-500
                  hover:from-blue-600 hover:to-red-600 hover:shadow-lg
                  transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden h-[400px] lg:h-full min-h-[600px] relative hover:shadow-xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.624046994504!2d-0.25456892635586953!3d5.622392632981308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf97a7b3d630ed%3A0x112d0828d262c2b1!2sWaltergates%20Ghana%20Limited!5e0!3m2!1sen!2sgh!4v1768781574647!5m2!1sen!2sgh"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent text-white p-4">
              <p className="font-semibold text-base mb-1">
                📍 Waltergates Ghana Limited
              </p>
              <p className="text-sm text-gray-200">
                24th Street, New Achimota, Accra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;