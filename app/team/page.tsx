"use client";
import React from "react";
import { Users, Quote, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamSections, TeamMember } from "@/src/data/teamData";

const TeamCard = ({
  member,
  isActive,
  onClick,
}: {
  member: TeamMember;
  isActive: boolean;
  onClick: () => void;
}) => {
  const handleSocialClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Social icon clicked, opening:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
      onClick={(e) => {
        console.log('TeamCard clicked', e.target);
        onClick();
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay - always visible on mobile when active, hover on desktop */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
          }`}
        />

        {/* Content Overlay - name, role, social icons (shows on hover desktop, click mobile) */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
            isActive
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'
          }`}
          onClick={(e) => {
            console.log('Content overlay clicked', e.target);
            e.stopPropagation();
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {member.name}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4">
            {member.role}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {member.linkedin && (
              <button
                onClick={(e) => handleSocialClick(e, member.linkedin!)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 z-10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            )}
            {member.twitter && (
              <button
                onClick={(e) => handleSocialClick(e, member.twitter!)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-300 z-10"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </button>
            )}
            {member.email && (
              <button
                onClick={(e) => handleSocialClick(e, `mailto:${member.email}`)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 z-10"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Description badge - always visible when not active, hidden when active or hovered */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 transition-opacity duration-300 pointer-events-none ${
            isActive ? 'opacity-0' : 'opacity-100 lg:group-hover:opacity-0'
          }`}
        >
          <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-xs md:text-sm text-gray-300 line-clamp-2">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CEOCard = ({
  member,
  isActive,
  onClick,
}: {
  member: TeamMember;
  isActive: boolean;
  onClick: () => void;
}) => {
  const handleSocialClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('CEO Social icon clicked, opening:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
      onClick={(e) => {
        console.log('CEOCard clicked', e.target);
        onClick();
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay - always visible on mobile when active, hover on desktop */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
          }`}
        />

        {/* Content Overlay - only shows when clicked on mobile, hover on desktop */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
            isActive
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'
          }`}
          onClick={(e) => {
            console.log('CEO Content overlay clicked', e.target);
            e.stopPropagation();
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {member.name}
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-4">
            {member.role}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {member.linkedin && (
              <button
                onClick={(e) => handleSocialClick(e, member.linkedin!)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 z-10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            )}
            {member.twitter && (
              <button
                onClick={(e) => handleSocialClick(e, member.twitter!)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-300 z-10"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </button>
            )}
            {member.email && (
              <button
                onClick={(e) => handleSocialClick(e, `mailto:${member.email}`)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 z-10"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Name badge - always visible on mobile when not active, hidden when active */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 transition-opacity duration-300 pointer-events-none ${
            isActive ? 'opacity-0' : 'opacity-100 lg:group-hover:opacity-0'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm md:text-base text-gray-300">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CEOMessageCard = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 md:p-12 relative overflow-hidden h-80 flex flex-col justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Quote className="w-8 h-8 text-[#2596be]" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Message from CEO
          </h3>
        </div>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
          "Waltergates Ghana Limited is committed to delivering innovative and
          reliable solutions that drive sustainable growth. Through excellence,
          professionalism, and strong partnerships, our team continues to create
          value and shape the future of our industry."
        </p>

        <p className="text-gray-900 font-semibold text-lg">
          - MR. SOLOMON K. ANDOH
        </p>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50" />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50" />
    </motion.div>
  );
};

const TeamPage = () => {
  const [activeCardId, setActiveCardId] = React.useState<string | null>(null);

  return (
    <div id="team" className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div
        className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight tracking-widest uppercase mb-4">
              Meet Our Team
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
              Dedicated professionals driving innovation and excellence
            </p>
          </motion.div>

          {/* Icon */}
          <div className="text-center mt-6">
            <button className="text-[#2596be] hover:scale-110 transition-transform">
              <Users className="w-10 h-10 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Team Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {teamSections.map((section, index) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <div className="text-center mb-10">
                <h2 className="font-bold text-2xl md:text-4xl mb-3 text-gray-800 uppercase tracking-wider">
                  {section.title}
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto" />
              </div>

              {section.title === "CHIEF EXECUTIVE OFFICER" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.members.map((member) => (
                    <CEOCard
                      key={member.name}
                      member={member}
                      isActive={activeCardId === member.name}
                      onClick={() =>
                        setActiveCardId(
                          activeCardId === member.name ? null : member.name
                        )
                      }
                    />
                  ))}
                  <CEOMessageCard />
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.members.map((member) => (
                    <TeamCard
                      key={member.name}
                      member={member}
                      isActive={activeCardId === member.name}
                      onClick={() =>
                        setActiveCardId(
                          activeCardId === member.name ? null : member.name
                        )
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;