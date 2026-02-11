"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import { solutionsSections } from "@/src/data/solutionsData";
import { useParams } from "next/navigation";

export default function SolutionDetailPage() {
  const params = useParams();
  const solutionId = parseInt(params.id as string);
  
  // Find solution from all sections
  let solution = null;
  for (const section of solutionsSections) {
    const found = section.solutions.find((s) => s.id === solutionId);
    if (found) {
      solution = found;
      break;
    }
  }

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Solution Not Found</h1>
          <Link href="/solutions">
            <button className="bg-[#2596be] hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all">
              Back to Solutions
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <img
          src={solution.image}
          alt={solution.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative h-full flex flex-col items-start justify-end p-6 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Back Button */}
            <Link href="/solutions">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-white mb-6 hover:text-[#2596be] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Solutions
              </motion.button>
            </Link>

            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {solution.name}
              </h1>
            </div>

            <p className="text-xl text-gray-200 max-w-2xl">
              {solution.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {solution.longDescription}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-[#2596be]" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-[#2596be] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-red-600" />
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.benefits?.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section with Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2596be] to-blue-700 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg mb-8 opacity-90">
            Visit {solution.name} and discover how it can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {/* Official Website Link */}
            <a href={solution.link} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2 w-fit"
              >
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </a>

            {/* Try it Out Link */}
            {solution.tryLink && (
              <a href={solution.tryLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 w-fit"
                >
                  Try it Out
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </a>
            )}

            {/* Back to Solutions */}
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                Explore More Solutions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
