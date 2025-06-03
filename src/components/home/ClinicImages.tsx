import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClinicImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      title: "Modern Reception Area",
      description: "Welcome to our state-of-the-art dental facility",
    },
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      title: "Consultation Area",
      description: "Comfortable space for patient consultations",
    },
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
      title: "Dental Equipment",
      description: "Advanced tools for precise dental care",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Waiting Lounge",
      description: "Relaxing environment for our patients",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className=" bg-background py-16 md:py-20 mt-0 flex items-center relative transition-colors duration-300">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="relative mb-4">
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
          <img
            src={images[currentImage].url}
            alt={images[currentImage].title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
              {images[currentImage].title}
            </h3>
            <p className="text-white/90 text-lg">
              {images[currentImage].description}
            </p>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "bg-sky-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default ClinicImageGallery;