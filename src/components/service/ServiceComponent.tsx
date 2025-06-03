import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"

const CLOUDINARY_CLOUD_NAME = "dyd8cwf8e";
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
  crop?: string;
}

const getCloudinaryUrl = (
  publicId: string,
  options: CloudinaryOptions = {}
): string => {
  const {
    width = 800,
    height = 600,
    quality = "auto",
    format = "auto",
    crop = "fill"
  } = options;
  
  return `${CLOUDINARY_BASE_URL}/w_${width},h_${height},c_${crop},q_${quality},f_${format}/${publicId}`;
};

const services = [
  {
    id: 1,
    title: "Root Canal",
    image: getCloudinaryUrl("services/nsw5dbbnfe2sno97lhwa"),
    description: "Advanced endodontic treatment to save your natural teeth and eliminate pain with modern techniques.",
    features: ["Pain-free procedure", "Same-day treatment", "Advanced technology", "Expert care"],
  },
  {
    id: 2,
    title: "Restorations",
    image: getCloudinaryUrl("services/ljvwdpetenwmvqdnsmqu"),
    description: "Comprehensive tooth restoration using premium materials for lasting results and natural appearance.",
    features: ["Durable materials", "Natural appearance", "Long-lasting results", "Custom fit"],
  },
  {
    id: 3,
    title: "Crown and Bridge",
    image: getCloudinaryUrl("services/yt6mfga4bxiomhzndubr"),
    description: "Custom-made crowns and bridges designed for optimal function and seamless aesthetics.",
    features: ["Custom fit", "Premium materials", "Natural look", "Long-term solution"],
  },
  {
    id: 4,
    title: "Veneers",
    image: getCloudinaryUrl("services/scuvwrjqzajfpplzfxhw"),
    description: "Transform your smile with ultra-thin, custom-crafted porcelain veneers for instant results.",
    features: ["Instant transformation", "Stain resistant", "Minimal prep", "Natural appearance"],
  },
  {
    id: 5,
    title: "Digital X-Ray",
    image: getCloudinaryUrl("services/kpnyhsdvhidhhdt1dcwj"),
    description: "State-of-the-art digital imaging technology for accurate diagnosis and precise treatment planning.",
    features: ["Instant results", "Low radiation", "High precision", "Digital storage"],
  },
  {
    id: 6,
    title: "Child Dental Treatment",
    image: getCloudinaryUrl("services/ss8i1u0tbjumqlccprld"),
    description: "Specialized pediatric dental care delivered in a comfortable, child-friendly environment.",
    features: ["Gentle approach", "Fun environment", "Preventive focus", "Expert pediatric care"],
  },
  {
    id: 7,
    title: "Braces",
    image: getCloudinaryUrl("services/goytarcgrtn33jxyjlki"),
    description: "Comprehensive orthodontic treatment options for perfectly aligned teeth and improved bite.",
    features: ["Multiple options", "Regular monitoring", "Expert care", "Proven results"],
  },
  {
    id: 8,
    title: "Clear Aligners",
    image: getCloudinaryUrl("services/c4lu6apnowkistdi2q2i"),
    description: "Nearly invisible orthodontic treatment for discreet teeth straightening without metal braces.",
    features: ["Nearly invisible", "Removable", "Comfortable", "Effective results"],
  },
  {
    id: 9,
    title: "Teeth Cleaning",
    image: getCloudinaryUrl("services/jdggyh8nmmjdyqswp4yi"),
    description: "Professional dental hygiene services to maintain optimal oral health and prevent disease.",
    features: ["Deep cleaning", "Plaque removal", "Fresh breath", "Preventive care"],
  },
  {
    id: 10,
    title: "Dentures",
    image: getCloudinaryUrl("services/fxc5apl8ccfaipqn5tlh"),
    description: "Custom-fitted dentures designed for complete smile restoration and comfortable functionality.",
    features: ["Perfect fit", "Natural appearance", "Comfortable wear", "Durable construction"],
  },
  {
    id: 11,
    title: "Implants",
    image: getCloudinaryUrl("services/tpxpyyx2avdjavifvgsx"),
    description: "Permanent tooth replacement solution using titanium implants for natural feel and function.",
    features: ["Permanent solution", "Natural feel", "Bone preservation", "Long-lasting"],
  },
  {
    id: 12,
    title: "Oral Surgery",
    image: getCloudinaryUrl("services/r9ahbwjkffwvb8z2mcr4"),
    description: "Minor and major oral surgical procedures performed with precision, care and advanced techniques.",
    features: ["Expert surgeons", "Advanced techniques", "Quick recovery", "Comprehensive care"],
  },
  {
    id: 13,
    title: "Dental Jewellery",
    image: getCloudinaryUrl("services/c3emuqrnomdtgplyprju"),
    description: "Add sparkle to your smile with safe, removable dental gems and unique accessories.",
    features: ["Safe materials", "Easy removal", "Unique designs", "Professional application"],
  },
  {
    id: 14,
    title: "Smile Design",
    image: getCloudinaryUrl("services/uxorjscxw7iuynbjr8ie"),
    description: "Comprehensive smile makeover combining multiple treatments for stunning, natural-looking results.",
    features: ["Digital preview", "Comprehensive plan", "Stunning results", "Personalized approach"],
  },
  {
    id: 15,
    title: "Teeth Whitening",
    image: getCloudinaryUrl("services/moi6fpms11y3yv0dqkoq"),
    description: "Professional whitening treatments for a brighter, more confident smile with lasting results.",
    features: ["Instant results", "Safe procedure", "Long-lasting", "Professional grade"],
  },
];

const imageVariants = {
  initial: { opacity: 0, x: 40, scale: 0.97 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, type: "spring" } },
  exit: { opacity: 0, x: -40, scale: 0.97, transition: { duration: 0.4, type: "spring" } },
};

const contentVariants = {
  initial: { opacity: 0, x: -40, scale: 0.97 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, type: "spring" } },
  exit: { opacity: 0, x: 40, scale: 0.97, transition: { duration: 0.4, type: "spring" } },
};

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
};

const OptimizedImage = ({ src, alt, className, onLoad }: OptimizedImageProps) => {
  const [imageState, setImageState] = useState('loading');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setImageState('loaded');
      onLoad?.();
    };
    img.onerror = () => {
      setImageState('error');
    };
    img.src = src;
  }, [src, onLoad]);

  if (imageState === 'loading') {
    return (
      <div className={`${className} bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (imageState === 'error') {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center`}>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <div className="text-4xl mb-2">🦷</div>
          <div className="text-sm">Image not available</div>
        </div>
      </div>
    );
  }

  return <img src={imageSrc} alt={alt} className={className} />;
};

function ServicesComponent() {
  const [activeService, setActiveService] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const preloadImage = (index: any) => {
      if (preloadedImages.has(index)) return;
      
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, index]));
      };
      img.src = services[index].image;
    };

    const currentIndex = activeService;
    const nextIndex = (currentIndex + 1) % services.length;
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;

    [currentIndex, nextIndex, prevIndex].forEach(preloadImage);
  }, [activeService, preloadedImages]);

  const handleServiceChange = (newIndex: any) => {
    setActiveService(newIndex);
  };

  const handleClick = () => {
    navigate("/appointment");
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            All Our Services
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => handleServiceChange(idx)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                idx === activeService
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Side */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeService].image}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <OptimizedImage
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-[400px] sm:h-[500px] object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2 space-y-6 relative min-h-[400px] sm:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeService].title}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 flex flex-col justify-center space-y-6"
              >
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {services[activeService].title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {services[activeService].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                  <div className="text-gray-600 dark:text-gray-400 italic">
                    And more!
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row pt-6">
                  <button onClick={handleClick} className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:scale-105">
                    BOOK NOW
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleServiceChange(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === activeService 
                  ? "bg-blue-600 scale-125" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;