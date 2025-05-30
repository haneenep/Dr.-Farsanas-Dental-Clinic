import React, { Suspense } from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AboutDentaClinic from "@/components/home/AboutDentalClinic";
import DentalServicesCarousel from "@/components/home/ServiceSection";
import LoadingPopUp from "@/components/common/skeleton/LoadingPopUp";
import TopHeader from "@/components/common/TopHeader";
import PatientReviewsSection from "@/components/home/Reviews";
import useHideOnScroll from "@/hooks/useHideOnScroll";

const DentalHomeIntro = React.lazy(
  () => import("@/components/home/DentalHomeIntro")
);

const Home = () => {
  const hideTopHeader = useHideOnScroll(10);

  return (
    <>
      <Suspense fallback={<LoadingPopUp isLoading />}>
        {/* Only show TopHeader on desktop and when not scrolled */}
        <div className={`hidden md:block transition-all duration-300 ${hideTopHeader ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}>
          <TopHeader />
        </div>
        <Header />
        <DentalHomeIntro />
        <AboutDentaClinic />
        <DentalServicesCarousel />
        <PatientReviewsSection />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;