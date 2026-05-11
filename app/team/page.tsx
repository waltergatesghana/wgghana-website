"use client";
import React from "react";
import { Users, Quote, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { teamSections, TeamMember } from "@/src/data/teamData";

// ─────────────────────────────────────────────
// TeamCard  (unchanged logic, gradient syntax fixed)
// ─────────────────────────────────────────────
const TeamCard = ({
  member,
  isActive,
  onClick,
}: {
  member: TeamMember;
  isActive: boolean;
  onClick: () => void;
}) => {
  const handleSocialClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
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

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
          }`}
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          }}
        />

        {/* Hover / active content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-300 mb-3">{member.role}</p>
          <div className="flex gap-2">
            {member.linkedin && (
              <button
                onClick={(e) => handleSocialClick(e, member.linkedin!)}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </button>
            )}
            {member.twitter && (
              <button
                onClick={(e) => handleSocialClick(e, member.twitter!)}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </button>
            )}
            {member.email && (
              <button
                onClick={(e) => handleSocialClick(e, `mailto:${member.email}`)}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Default badge */}
        <div
          className={`absolute bottom-0 left-0 right-0 text-white p-4 transition-opacity duration-300 pointer-events-none ${
            isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"
          }`}
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
          }}
        >
          <h3 className="text-base md:text-lg font-bold mb-0.5">{member.name}</h3>
          <p className="text-xs text-gray-300 line-clamp-2">{member.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// CEOCard  — restored h-96 for visual hierarchy
// ─────────────────────────────────────────────
const CEOCard = ({
  member,
  isActive,
  onClick,
}: {
  member: TeamMember;
  isActive: boolean;
  onClick: () => void;
}) => {
  const handleSocialClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* h-96 preserves the CEO's visual prominence over regular team cards */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
          }`}
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          }}
        />

        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {member.name}
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-4">{member.role}</p>
          <div className="flex gap-3">
            {member.linkedin && (
              <button
                onClick={(e) => handleSocialClick(e, member.linkedin!)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </button>
            )}
            {member.twitter && (
              <button
                onClick={(e) => handleSocialClick(e, member.twitter!)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </button>
            )}
            {member.email && (
              <button
                onClick={(e) => handleSocialClick(e, `mailto:${member.email}`)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 text-white p-5 transition-opacity duration-300 pointer-events-none ${
            isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"
          }`}
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm md:text-base text-gray-300">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// CEOMessageCard  — the main refactor
//
// Key changes:
//  1. AnimatePresence + motion.div replaces conditional rendering
//     → smooth height & opacity transition, no layout jump
//  2. Rotating ChevronDown icon replaces two separate buttons
//  3. Scrollable inner container (max-h + overflow-y-auto) on
//     mobile so the card never overflows the grid cell
//  4. `items-start` kept on parent grid (see TeamPage) so the
//     card only grows downward, never stretches the photo
// ─────────────────────────────────────────────
const CEO_EXTRA_PARAGRAPHS = [
  {
    key: "clients",
    label: "To our clients",
    body: `we offer not service, but stewardship. Every mandate entrusted to us is honoured
      as a covenant — defended with discipline, delivered with excellence, and remembered
      long after the contract closes. You do not simply hire Waltergates; you gain a team
      that treats your ambitions as our own and your success as the only true measure of
      ours. When you rise, we rise — and the foundations we lay together are built to
      outlast us both.`,
  },
  {
    key: "partners",
    label: "To our partners",
    body: `we offer a counterpart who understands both the boardrooms of London, Dubai, and
      New York and the marketplaces of Accra and Kumasi — a bridge built precisely for
      those who intend to cross into Africa's defining commercial century, and to cross it
      well. We offer trust forged in a decade of delivery — and a name that honours every
      handshake it accepts.`,
  },
  {
    key: "investors",
    label: "To our investors",
    body: `we offer the discipline of over a decade of measured growth and a portfolio of
      scalable platforms. We offer return measured in both capital and consequence — from
      USSD and fintech rails to the Informal Sector Empowerment Platforms — designed to
      convert capital into compounding returns, alongside the formalization of the informal
      sector and the empowerment of more than five million (5,000,000) untapped
      entrepreneurs.`,
  },
  {
    key: "talent",
    label: "To the exceptional talent",
    body: `weighing where to invest a career, we offer purpose worthy of a lifetime: the
      chance to write the operating systems of nations and shape institutions that future
      generations will inherit.`,
  },
];

const CEOMessageCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (expanded && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [expanded]);

  return (
    <motion.div
      ref={cardRef}
      className="rounded-xl shadow-lg relative overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%, #fff7ed 100%)",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Decorative blobs (pointer-events-none so they never block clicks) ── */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-40" />
      <div className="pointer-events-none absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-40" />

      {/* ── Scrollable body ─────────────────────────────────────────────────── */}
      {/* max-h keeps the card flush with the CEO photo on mobile;               */}
      {/* on md+ screens the grid is `items-start` so it grows freely.           */}
      <div className="relative z-10 flex flex-col gap-0 overflow-hidden">

        {/* Header — always visible */}
        <div className="px-7 pt-7 pb-4 flex items-start gap-3">
          <Quote className="w-7 h-7 text-[#2596be] shrink-0 mt-0.5" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
            A Message from the Chief Executive Officer
            <span className="block text-sm font-medium text-[#2596be] mt-1 tracking-wide">
              Waltergates Ghana Limited
            </span>
          </h3>
        </div>

        {/* Divider */}
        <div className="mx-7 h-px bg-gradient-to-r from-[#2596be]/40 via-orange-200 to-transparent mb-5" />

        {/* Lead paragraph — always visible */}
        <p className="px-7 text-gray-700 text-sm md:text-base leading-relaxed">
          For more than a decade,{" "}
          <strong className="text-gray-900">Waltergates Ghana Limited</strong> has stood
          where ambition meets execution — engineering the digital, financial, and human
          infrastructure of a continent the world can no longer afford to overlook.
          Ghanaian by origin and global by intention, we deliver work of international
          calibre across software development, fintech and payment platforms, fibre optic
          and telecommunications engineering, advanced security systems, and strategic
          advisory.
        </p>

        {/* ── Animated expansion ─────────────────────────────────────────────── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="ceo-message-body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-7 pt-4 pb-2 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                {CEO_EXTRA_PARAGRAPHS.map((p) => (
                  <p key={p.key}>
                    <strong className="text-gray-900">{p.label}</strong>, {p.body}
                  </p>
                ))}

                <p>
                  If you believe, as we do, that the most enduring fortunes of this century
                  will be made by those who build the future rather than wait for it, then
                  take your place beside us. The work is significant. The hour is now. And
                  history, as it always does, will remember those who stood on the right
                  side of it.
                </p>

                {/* Signature */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm md:text-base leading-relaxed">
                    Solomon Andoh
                    <br />
                    <span className="font-normal text-gray-500">Chief Executive Officer</span>
                    <br />
                    <span className="font-normal text-gray-500">Waltergates Ghana Limited</span>
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-widest uppercase text-[#2596be]">
                    Innovation · Integrity · Impact
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Toggle button ───────────────────────────────────────────────────── */}
        <div className="px-7 py-5">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#2596be] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1f7ca0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2596be]"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read full message"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// TeamPage
// ─────────────────────────────────────────────
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
        <div className="absolute inset-0 bg-black/70" />
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
          {teamSections.map((section) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <div className="text-center mb-10">
                <h2 className="font-bold text-2xl md:text-4xl mb-3 text-gray-800 uppercase tracking-wider">
                  {section.title}
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto" />
              </div>

              {section.title === "CHIEF EXECUTIVE OFFICER" ? (
                /**
                 * items-start is the critical fix:
                 * without it, both grid children stretch to the same height —
                 * so a collapsed message card awkwardly matches the photo height,
                 * and an expanded one forces the photo to stretch too.
                 * items-start lets each child be its natural height.
                 */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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