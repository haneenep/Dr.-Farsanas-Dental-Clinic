import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background effects that respect theme */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main content container */}
        <div className="max-w-2xl mx-auto">
          {/* Lottie Animations Side by Side */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <iframe
              src="https://lottie.host/embed/24080fff-9378-4d01-ab03-2c1f795b80c3/WmgiAyUBkW.lottie"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-0 bg-transparent"
              allowFullScreen
              title="Main Animation"
              loading="lazy"
            />
            <iframe
              src="https://lottie.host/embed/8691d6d5-f9bd-4cbb-82fe-90a70334fe43/9T3kVSTUkJ.lottie"
              className="w-48 h-24 sm:w-64 sm:h-32 md:w-80 md:h-40 border-0 bg-transparent"
              allowFullScreen
              title="Decoration Animation"
              loading="lazy"
            />
          </div>
          {/* Stay tuned message */}
          <div className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mt-8">
            Stay tuned
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;