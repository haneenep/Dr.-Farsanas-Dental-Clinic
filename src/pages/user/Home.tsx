import React from "react";
import AboutDentaClinic from "@/components/home/AboutDentalClinic";
import DentalServicesSection from "@/components/home/ServiceSection";
import PatientReviewsSection from "@/components/home/Reviews";
import ClinicImageGallery from "@/components/home/ClinicImages";
import DentalBeforeAfterSlider from "@/components/home/BeforeAfterSlider";

const DentalHomeIntro = React.lazy(
  () => import("@/components/home/DentalHomeIntro")
);

const Home = () => {
  return (
    <>
      <DentalHomeIntro />
      <AboutDentaClinic />
      <DentalServicesSection />
      <ClinicImageGallery/>
      <DentalBeforeAfterSlider/>
      <PatientReviewsSection />
    </>
  );
};

export default Home;
