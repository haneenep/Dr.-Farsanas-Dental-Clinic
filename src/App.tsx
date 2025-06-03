import Home from "./pages/user/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/user/Services";
import MainLayout from "./components/common/layout/MainLayout";
// import ComingSoonPage from "./pages/ComingSoon";
import Appointment from "./pages/user/Appointment";
import BeforeAfterGallery from "./pages/user/BeforeAfterGallery";
import ScrollToTop from "./components/common/skeleton/ScrollToTop";
import BackToTopButton from "./components/common/BackToTopButton";

function App() {
  return (
    <>
      <Router>
          <ScrollToTop/>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/about" element={<ComingSoonPage />} />
            <Route path="/contact-us" element={<ComingSoonPage />} /> */}
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/before-&-after" element={<BeforeAfterGallery />} />
          </Routes>
          <BackToTopButton/>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
