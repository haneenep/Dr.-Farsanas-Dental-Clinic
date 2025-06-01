import Home from "./pages/user/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/user/Services";
import MainLayout from "./components/common/layout/MainLayout";
import ComingSoonPage from "./pages/ComingSoon";
import Appointment from "./pages/user/Appointment";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<ComingSoonPage />} />
            <Route path="/gallery" element={<ComingSoonPage />} />
            <Route path="/contact-us" element={<ComingSoonPage />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
