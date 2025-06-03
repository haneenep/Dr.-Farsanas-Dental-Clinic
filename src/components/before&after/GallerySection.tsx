import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import your local images
import cleaningBefore1 from "../../assets/works/cleaning before 1.png";
import cleaningBefore2 from "../../assets/works/cleaning before 2.png";
import cleaningAfter1 from "../../assets/works/cleaning after 1.png";
import cleaningAfter2 from "../../assets/works/cleaning after 2.png";
import cleanBefore1 from "../../assets/works/teath clean case 2 before 1.png";
import cleanBefore2 from "../../assets/works/teath clean case 2 before 2.png";
import cleanAfter1 from "../../assets/works/teath clean case 2 after 1.png";
import cleanAfter2 from "../../assets/works/teath clean case 2 after 2.png";
import gapcase1before1 from "../../assets/works/teath gap before 1.png";
import gapcase1after1 from "../../assets/works/teath gap after 1.png";

const cases = [
  {
    id: 1,
    procedure: "Teeth Cleaning - Case 1",
    pairs: [
      {
        beforeImage: cleaningBefore1,
        afterImage: cleaningAfter1,
        beforeDescription: "Before: Heavy tartar and stains on lower front teeth.",
        afterDescription: "After: Teeth are visibly cleaner and brighter after professional cleaning.",
      },
      {
        beforeImage: cleaningBefore2,
        afterImage: cleaningAfter2,
        beforeDescription: "Before: Plaque buildup and yellowing on upper teeth.",
        afterDescription: "After: Plaque removed and natural tooth color restored.",
      },
    ],
  },
  {
    id: 2,
    procedure: "Teeth Cleaning - Case 2",
    pairs: [
      {
        beforeImage: cleanBefore1,
        afterImage: cleanAfter1,
        beforeDescription: "Before: Stains and calculus on lower teeth.",
        afterDescription: "After: Teeth appear much cleaner and healthier.",
      },
      {
        beforeImage: cleanBefore2,
        afterImage: cleanAfter2,
        beforeDescription: "Before: Yellowish deposits on upper teeth.",
        afterDescription: "After: Bright, natural color restored after cleaning.",
      },
    ],
  },
  {
    id: 3,
    procedure: "Gap Correction - Case 1",
    pairs: [
      {
        beforeImage: gapcase1before1,
        afterImage: gapcase1after1,
        beforeDescription: "Before: Visible gap between front teeth.",
        afterDescription: "After: Gap closed, smile looks even and natural.",
      },
    ],
  },
];

const GallerySection = () => {
  // Track hovered state per case and pair
  const [hovered, setHovered] = useState<{ caseIdx: number; pairIdx: number; side: "before" | "after" } | null>(null);
  // Track current pair index for each case
  const [pairIndexes, setPairIndexes] = useState(() => cases.map(() => 0));

  const handlePrevPair = (caseIdx: number) => {
    setPairIndexes((prev) =>
      prev.map((idx, i) =>
        i === caseIdx
          ? (idx - 1 + cases[caseIdx].pairs.length) % cases[caseIdx].pairs.length
          : idx
      )
    );
    setHovered(null);
  };

  const handleNextPair = (caseIdx: number) => {
    setPairIndexes((prev) =>
      prev.map((idx, i) =>
        i === caseIdx
          ? (idx + 1) % cases[caseIdx].pairs.length
          : idx
      )
    );
    setHovered(null);
  };

  return (
    <section className="min-h-[75vh] bg-background py-16 md:py-20 flex items-center relative transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {cases.map((caseItem, caseIdx) => {
          const pairIdx = pairIndexes[caseIdx];
          const pair = caseItem.pairs[pairIdx];
          return (
            <div key={caseItem.id} className="mb-16">
              <div className="mb-6">
                <p className="text-sky-600 font-semibold text-xl tracking-tight">
                  Procedures: <span className="text-foreground">{caseItem.procedure}</span>
                </p>
              </div>
              <div className="w-full max-w-full mx-auto mb-10">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  {/* Before Image */}
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      if (window.matchMedia("(pointer: fine)").matches) {
                        setHovered({ caseIdx, pairIdx, side: "before" });
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.matchMedia("(pointer: fine)").matches) {
                        setHovered(null);
                      }
                    }}
                  >
                    <div className="rounded-lg overflow-hidden bg-gradient-to-br from-sky-400/5 to-blue-600/5 dark:from-sky-400/10 dark:to-blue-600/10 shadow-lg transition-all duration-300 hover:scale-105">
                      <img
                        src={pair.beforeImage}
                        alt="Before treatment"
                        className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                      />
                      {/* Overlay for After hover (desktop only) */}
                      <div
                        className={`
                          absolute inset-0 flex flex-col items-center justify-center
                          transition-opacity duration-300 pointer-events-none
                           md:flex
                          ${
                            hovered &&
                            hovered.caseIdx === caseIdx &&
                            hovered.pairIdx === pairIdx &&
                            hovered.side === "after"
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(14,165,233,0.92) 0%, rgba(37,99,235,0.92) 100%)",
                        }}
                      >
                        <span className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                          After <span className="text-xl">•</span>
                        </span>
                        <p className="text-white text-base px-4 text-center max-w-xs md:max-w-sm">
                          {pair.afterDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* After Image */}
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      if (window.matchMedia("(pointer: fine)").matches) {
                        setHovered({ caseIdx, pairIdx, side: "after" });
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.matchMedia("(pointer: fine)").matches) {
                        setHovered(null);
                      }
                    }}
                  >
                    <div className="rounded-lg overflow-hidden bg-gradient-to-br from-sky-400/5 to-blue-600/5 dark:from-sky-400/10 dark:to-blue-600/10 shadow-lg transition-all duration-300 hover:scale-105">
                      <img
                        src={pair.afterImage}
                        alt="After treatment"
                        className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                      />
                      {/* Overlay for Before hover (desktop only) */}
                      <div
                        className={`
                          absolute inset-0 flex flex-col items-center justify-center
                          transition-opacity duration-300 pointer-events-none
                           md:flex
                          ${
                            hovered &&
                            hovered.caseIdx === caseIdx &&
                            hovered.pairIdx === pairIdx &&
                            hovered.side === "before"
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(14,165,233,0.92) 0%, rgba(37,99,235,0.92) 100%)",
                        }}
                      >
                        <span className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                          Before <span className="text-xl">•</span>
                        </span>
                        <p className="text-white text-base px-4 text-center max-w-xs md:max-w-sm">
                          {pair.beforeDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pair navigation */}
                {caseItem.pairs.length > 1 && (
                  <div className="flex justify-center gap-6 mt-2">
                    <button
                      onClick={() => handlePrevPair(caseIdx)}
                      className="p-3 rounded-full bg-gray-100 hover:bg-sky-100 transition-colors duration-200 shadow"
                      aria-label="Previous pair"
                    >
                      <ChevronLeft className="w-5 h-5 text-sky-600" />
                    </button>
                    <button
                      onClick={() => handleNextPair(caseIdx)}
                      className="p-3 rounded-full bg-gray-100 hover:bg-sky-100 transition-colors duration-200 shadow"
                      aria-label="Next pair"
                    >
                      <ChevronRight className="w-5 h-5 text-sky-600" />
                    </button>
                  </div>
                )}
              </div>
              {caseIdx < cases.length - 1 && (
                <div className="border-b border-gray-200 mt-12"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;