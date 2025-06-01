import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopHeader from "@/components/common/TopHeader";
import useHideOnScroll from "@/hooks/useHideOnScroll";
import { Suspense } from "react";
import LoadingPopUp from "../skeleton/LoadingPopUp";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const hideTopHeader = useHideOnScroll(10);
  const location = useLocation();
  // Check if current route is /appointment
  const isAppointmentPage = location.pathname === "/appointment";

  return (
    <Suspense fallback={<LoadingPopUp isLoading />}>
      {!isAppointmentPage && (
        <div
          className={`hidden md:block transition-all duration-300 ${
            hideTopHeader
              ? "-translate-y-full opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          <TopHeader />
        </div>
      )}
      {!isAppointmentPage && <Header />}
      {children}
      {!isAppointmentPage && <Footer />}
    </Suspense>
  );
};

export default MainLayout;