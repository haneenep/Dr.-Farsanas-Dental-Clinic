import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import cleaningBefore1 from "../../assets/works/cleaning before 1.png";
import cleaningAfter1 from "../../assets/works/cleaning after 1.png";
import cleanBefore1 from "../../assets/works/teath clean case 2 before 1.png";
import cleanAfter1 from "../../assets/works/teath clean case 2 after 1.png";
import gapcase1before1 from "../../assets/works/teath gap before 1.png";
import gapcase1after1 from "../../assets/works/teath gap after 1.png";
import MoreButton from "../common/MoreButton";

// Reusable MoreGalleryButton component

const BeforeAfterSlider = ({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => setIsDragging(false);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
      <div
        ref={containerRef}
        className="relative w-full h-64 cursor-col-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={before}
            alt={beforeAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: isDragging ? "none" : "clip-path 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <img
            src={after}
            alt={afterAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{
            left: `${sliderPosition}%`,
            transition: isDragging ? "none" : "left 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-sky-500 flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform duration-200">
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-3 bg-sky-500 rounded-full"></div>
              <div className="w-0.5 h-3 bg-sky-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DentalBeforeAfterSlider = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 transition-colors duration-300">
            Our patients' <span className="text-sky-500">smiles</span> speak for themselves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the incredible transformations we've achieved. Drag the slider to reveal the amazing results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BeforeAfterSlider
            before={cleaningBefore1}
            after={cleaningAfter1}
            beforeAlt="Before Cleaning"
            afterAlt="After Cleaning"
          />
          <BeforeAfterSlider
            before={cleanBefore1}
            after={cleanAfter1}
            beforeAlt="Before Alignment"
            afterAlt="After Alignment"
          />
          <BeforeAfterSlider
            before={gapcase1before1}
            after={gapcase1after1}
            beforeAlt="Before Whitening"
            afterAlt="After Whitening"
          />
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            Drag the slider left and right to see the amazing transformations
          </p>
        </motion.div>

        <MoreButton children='Before & After Gallery' onClick={() => navigate('/before-&-after')} />
      </div>
    </section>
  );
};

export default DentalBeforeAfterSlider;