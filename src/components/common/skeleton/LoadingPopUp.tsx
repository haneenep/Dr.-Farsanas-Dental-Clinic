import React from "react";

interface LoadingPopUpProps {
  isLoading: boolean;
}

const LoadingPopUp: React.FC<LoadingPopUpProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50">
      {/* Main Loading Container */}
      <div className="flex flex-col items-center justify-center">
        {/* Animated Logo/Spinner */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 border-4 border-transparent border-t-sky-500 border-r-sky-400 rounded-full animate-spin"></div>
          {/* Inner pulsing dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-sky-500 rounded-full animate-pulse shadow-lg shadow-sky-500/50"></div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-xl animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-white">Loading...</h3>
          <p className="text-sky-400 text-sm">Please wait a moment</p>
        </div>

        {/* Animated dots */}
        {/* <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div> */}
      </div>
    </div>
  );
};

export default LoadingPopUp;
