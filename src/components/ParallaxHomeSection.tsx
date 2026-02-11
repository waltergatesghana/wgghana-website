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
        <div className="relative bg-slate-900 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            {/* Client Reviews Section */}
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                What Our Clients Say
              </h2>
              
              <div className="relative max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-12 shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 w-32 h-32 md:w-64 md:h-80 overflow-hidden rounded-full md:rounded-2xl">
                      <img
                        src={reviews[currentReview].image}
                        alt={reviews[currentReview].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Review Content */}
                    <div className="flex-1">
                      {/* Quote Icon */}
                      <svg 
                        className="w-8 h-8 md:w-16 md:h-16 text-gray-300 mb-3 md:mb-6" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      {/* Quote Text */}
                      <p className="text-sm md:text-2xl text-gray-800 mb-4 md:mb-8 leading-relaxed">
                        {reviews[currentReview].quote}
                      </p>

                      {/* Name and Position */}
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-base md:text-2xl font-bold text-gray-900 mb-1">
                          {reviews[currentReview].name}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-lg">
                          {reviews[currentReview].position}
                        </p>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-8">
                        <span className="text-gray-500 text-sm md:text-lg font-medium">
                          {currentReview + 1} / {reviews.length}
                        </span>
                        <div className="flex gap-2 ml-auto">
                          <button
                            onClick={prevReview}
                            className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-gray-300 hover:border-[#d32e41] hover:bg-yellow-50 transition-all flex items-center justify-center"
                            aria-label="Previous review"
                          >
                            <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={nextReview}
                            className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-gray-300 hover:border-[#d32e41] hover:bg-yellow-50 transition-all flex items-center justify-center"
                            aria-label="Next review"
                          >
                            <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Pagination Dots */}
                      <div className="flex gap-2 mt-4 md:mt-6">
                        {reviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                              index === currentReview 
                                ? 'bg-[#2596be] w-6 md:w-8' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to review ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHomeSection;