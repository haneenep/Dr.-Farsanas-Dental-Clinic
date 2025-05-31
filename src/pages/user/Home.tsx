import React from "react";
import AboutDentaClinic from "@/components/home/AboutDentalClinic";
import DentalServicesCarousel from "@/components/home/ServiceSection";
import PatientReviewsSection from "@/components/home/Reviews";

const DentalHomeIntro = React.lazy(
  () => import("@/components/home/DentalHomeIntro")
);

const Home = () => {
  return (
    <>
      <DentalHomeIntro />
      <AboutDentaClinic />
      <DentalServicesCarousel />
      <PatientReviewsSection />
    </>
  );
};

export default Home;
