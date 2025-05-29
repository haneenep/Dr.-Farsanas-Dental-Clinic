import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { 
  Activity, 
  Shield, 
  Crown, 
  Sparkles, 
  Camera, 
  Heart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DentalService {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  color: string;
}

const DENTAL_SERVICES: DentalService[] = [
  {
    title: "Root Canal",
    description: "Advanced endodontic treatment to save your natural teeth with modern techniques.",
    id: 1,
    icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#2563eb",
  },
  {
    title: "Restorations",
    description: "High-quality fillings and tooth restoration services using premium materials.",
    id: 2,
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#059669",
  },
  {
    title: "Crown & Bridge",
    description: "Durable crowns and bridges for lasting tooth replacement solutions.",
    id: 3,
    icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#d97706",
  },
  {
    title: "Veneers",
    description: "Beautiful porcelain veneers for a perfect, natural-looking smile.",
    id: 4,
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#7c3aed",
  },
  {
    title: "Digital X-Ray",
    description: "State-of-the-art digital imaging technology for precise diagnosis.",
    id: 5,
    icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#4f46e5",
  },
  {
    title: "Child Dental Treatment",
    description: "Gentle, specialized dental care designed specifically for children.",
    id: 6,
    icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "#ec4899",
  },
];

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

interface DentalServicesCarouselProps {
  services?: DentalService[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

export default function DentalServicesCarousel({
  services = DENTAL_SERVICES,
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
}: DentalServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints and items per view
  const getItemsPerView = () => {
    if (windowWidth < 640) return 1; // mobile
    if (windowWidth < 768) return 1; // small mobile
    if (windowWidth < 1024) return 2; // tablet
    if (windowWidth < 1280) return 2; // small desktop
    return 3; // large desktop
  };

  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, services.length - itemsPerView);

  // Handle hover events
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && maxIndex > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= maxIndex) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, maxIndex, pauseOnHover]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const totalIndicators = Math.ceil(services.length / itemsPerView);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-sky-300 to-sky-900 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Comprehensive dental care with state-of-the-art technology and personalized treatment plans
        </p>
      </div>
      
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 overflow-hidden bg-card border"
      >
        <motion.div
          drag="x"
          dragConstraints={{
            left: -(maxIndex * 100),
            right: 0,
          }}
          style={{ x, gap: windowWidth < 640 ? '16px' : windowWidth < 1024 ? '24px' : '32px' }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={SPRING_OPTIONS}
          className="flex"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex-shrink-0"
              style={{
                width: `calc((100% - ${((itemsPerView - 1) * (windowWidth < 640 ? 16 : windowWidth < 1024 ? 24 : 32))}px) / ${itemsPerView})`,
                minWidth: `calc((100% - ${((itemsPerView - 1) * (windowWidth < 640 ? 16 : windowWidth < 1024 ? 24 : 32))}px) / ${itemsPerView})`
              }}
            >
              <Card className="h-full transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 border-2"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--card)) 0%, color-mix(in srgb, ${service.color} 5%, hsl(var(--card))) 100%)`,
                  borderColor: `color-mix(in srgb, ${service.color} 20%, hsl(var(--border)))`,
                  minHeight: windowWidth < 640 ? '320px' : '360px'
                }}
              >
                <CardContent className="h-full flex flex-col p-4 sm:p-6 text-center">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${service.color} 20%, transparent), color-mix(in srgb, ${service.color} 40%, transparent))`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base flex-1 leading-relaxed mb-4 sm:mb-6 text-muted-foreground">
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <Button 
                    className="w-full font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg bg-[#FF5722] hover:bg-[#E64A19] text-white"
                    style={{ 
                      boxShadow: "0 4px 15px rgba(255, 87, 34, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 87, 34, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 87, 34, 0.3)";
                    }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Navigation Indicators */}
        {totalIndicators > 1 && (
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {Array.from({ length: totalIndicators }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => handleIndicatorClick(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full p-0 transition-all duration-300 hover:scale-150 ${
                  currentIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Navigation Arrows for larger screens */}
        {windowWidth >= 768 && totalIndicators > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
              disabled={currentIndex === 0}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 shadow-lg rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl bg-background border"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentIndex(Math.min(currentIndex + 1, maxIndex))}
              disabled={currentIndex >= maxIndex}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 shadow-lg rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl bg-background border"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">Next</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}