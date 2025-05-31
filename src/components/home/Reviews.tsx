import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PatientReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Everyone here is so very sweet and helpful! they always work with my schedule and help get me an appointment, even if it's last minute. The office is beautiful and so well run. The best part is they always give you a cookie on the way out.",
      author: "Muhammed Haneen."
    },
    {
      id: 2,
      text: "Dr. Farsana and her team are absolutely wonderful! The care I received was exceptional, and they made me feel comfortable throughout the entire procedure. Highly recommend this clinic to anyone looking for quality dental care.",
      author: "Hani."
    },
    {
      id: 3,
      text: "Amazing experience from start to finish. The staff is professional, friendly, and the office has a warm, welcoming atmosphere. They explained everything clearly and made sure I was comfortable at every step.",
      author: "Haneen Ep."
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-[400px] md:min-h-[60vh]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Left Side - Review */}
      <div className="flex-1 bg-black text-white flex items-center justify-center relative py-10 md:py-0">
        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-4 top-4 md:left-8 md:top-1/2 md:transform md:-translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
        </button>

        <button
          onClick={nextReview}
          className="absolute right-4 top-4 md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          aria-label="Next review"
        >
          <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
        </button>

        {/* Review Content */}
        <div className="max-w-xl mx-auto px-4 md:px-12 text-center">
          {/* Quote Mark */}
          <div className="text-4xl md:text-6xl font-serif mb-4 md:mb-8 opacity-80">
            "
          </div>

          {/* Review Text */}
          <p className="text-base md:text-xl leading-relaxed mb-6 md:mb-12 font-light">
            {reviews[currentReview].text}
          </p>

          {/* Author */}
          <p className="text-base md:text-lg font-light">
            — {reviews[currentReview].author}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                index === currentReview 
                  ? 'bg-white' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Title */}
      <div className="flex-1 bg-gray-100 dark:bg-background flex items-center justify-center relative overflow-hidden py-10 md:py-0">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-background dark:to-background"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-12">
          <h2 className="text-3xl md:text-6xl font-medium text-gray-800 dark:text-foreground mb-2 md:mb-4 leading-tight">
            kind words
          </h2>
          <p className="text-2xl md:text-6xl font-medium text-gray-800 dark:text-foreground mb-4 md:mb-8 leading-tight">
            from our patients
          </p>
          
          {/* Reviews Link */}
          <div className="flex items-center justify-center space-x-2 text-sky-500 text-base md:text-lg font-medium">
            <span>300+ 5-Star Reviews</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientReviewsSection;