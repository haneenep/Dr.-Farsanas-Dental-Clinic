import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AppointmentButton from "../common/AppointmentButton";
import { motion } from "framer-motion";

const DentalHomeIntro = () => {
  const [text] = useTypewriter({
    words: ["Perfect Smile Starts Here"],
    loop: 0,
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const renderWithBlueSmile = (typed: string): React.ReactNode[] => {
    const parts = typed.split(/(Smile)/);
    return parts.map((part, idx) =>
      part === "Smile" ? (
        <span key={idx} className="text-sky-500">
          {part}
        </span>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  };

  return (
    <section className="min-h-[75vh] bg-background py-16 md:py-20 mt-0 flex items-center relative transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            className="max-w-none md:max-w-[520px] text-center md:text-left md:pr-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground transition-colors duration-300 min-h-[4.5rem] tracking-tight whitespace-pre-line">
              Your{" "}
              <span>
                {renderWithBlueSmile(text)}
                <Cursor cursorStyle="|" />
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-normal max-w-none md:max-w-[480px] transition-colors duration-300">
              Experience world-class dental care with our expert team. We
              provide comprehensive oral health solutions in a comfortable,
              modern environment.
            </p>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <AppointmentButton />
            </div>
          </motion.div>

          {/* Right Content - Lottie Animation */}
          <motion.div
            className="flex justify-center items-center md:pl-4"
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px] aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 bg-gradient-to-br from-sky-400/5 to-blue-600/5 dark:from-sky-400/10 dark:to-blue-600/10"
              style={{
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 25px 70px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15)";
              }}
            >
              <iframe
                src="https://lottie.host/embed/4a9f03a9-be7d-42a0-b5d0-c87a7e275e93/jCD2uCOoCD.lottie"
                className="w-full h-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] border-none block rounded-lg"
                title="Dental Care Animation"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DentalHomeIntro;
