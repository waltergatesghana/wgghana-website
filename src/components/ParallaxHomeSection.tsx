import React, { useState } from 'react';

const ParallaxHomeSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: "We understand that logistics is more than just moving goods— it's about building relationships and trust.",
      name: "Mr. Markue Root",
      position: "Founder at Ontrack",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      id: 2,
      quote: "Waltergates Limited transformed our entire digital infrastructure. Their expertise and dedication are unmatched in the industry.",
      name: "Sarah Johnson",
      position: "CEO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-20">
        {/* Top Content Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900/80 to-transparent">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
           <div className="text-center">
<h1 className=" text-5xl md:text-7xl font-bold text-blue-300 mb-6">
  Waltergates Ghana Limited
</h1>



  <p className="text-xl md:text-2xl max-w-3xl mx-auto
    text-blue-300
    drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]
  ">
    Transforming businesses through innovative technology solutions and strategic consulting
  </p>
</div>

          </div>
        </div>

        {/* Spacer for parallax effect */}
        {/* <div className="h-screen"></div> */}

        {/* Bottom Content with solid background */}
       
      </div>
    </div>
  );
};

export default ParallaxHomeSection;