import React from 'react';
import { Card, CardContent } from '../ui/card';
import IntroMessage from '../lib/BlurTextComponent';

const AboutDentaClinic = () => {
  return (
    <section className="bg-background min-h-screen flex items-center py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-8 lg:gap-24 items-start flex-col lg:flex-row">
          {/* Left Side - Text Content */}
          <div className="flex-none lg:flex-[0_0_40%] w-full lg:w-2/5">
            {/* Main Title */}
            <div className="mb-8 lg:mb-12">
              <h2 
                className="text-6xl md:text-7xl lg:text-8xl font-light text-muted-foreground/50 leading-[0.85] mb-2 lg:mb-4 tracking-tight transition-colors duration-300"
                style={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                About
              </h2>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight transition-colors duration-300"
                style={{
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  letterSpacing: '-0.01em'
                }}
              >
                Dr. Farsana's Dental Clinic
              </h1>
            </div>
            
            {/* Vision Card */}
            <Card className="rounded-3xl bg-card max-w-full lg:max-w-[420px] shadow-md border border-border/50 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-sky-500 dark:text-sky-300 font-semibold mb-6 text-xl md:text-2xl">
                  Our Vision
                </h3>
                <IntroMessage />
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Image Grid */}
          <div className="flex-none lg:flex-[0_0_60%] w-full lg:w-3/5 relative h-[500px] lg:h-[600px]">
            {/* Main dental office image - Top Left */}
            <div className="absolute top-0 left-0 w-3/5 z-10">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop&crop=center"
                  alt="Modern dental office interior"
                  className="w-full h-44 md:h-48 lg:h-56 object-cover block"
                />
              </div>
            </div>

            {/* Happy patient image - Top Right */}
            <div className="absolute top-16 right-0 w-1/2 z-20">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=250&fit=crop&crop=face"
                  alt="Happy dental patient"
                  className="w-full h-40 md:h-44 lg:h-48 object-cover block"
                />
              </div>
            </div>

            {/* Elderly patient image - Bottom Left */}
            <div className="absolute bottom-20 left-0 w-[45%] z-20">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face"
                  alt="Satisfied elderly patient"
                  className="w-full h-36 md:h-40 lg:h-44 object-cover block"
                />
              </div>
            </div>

            {/* Equipment image - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-[55%] z-10">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=250&fit=crop&crop=center"
                  alt="Advanced dental equipment"
                  className="w-full h-40 md:h-44 lg:h-48 object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDentaClinic;