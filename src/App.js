import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NoPageFound from "./pages/NoPageFound";
import Services from "./pages/service/Services";
import Partner from "./pages/partner/Partner";
import Commitment from "./pages/commitment/Commitment";
import Mining from "./pages/mining/Mining";
import Project from "./pages/project/Project";
import Testimonial from "./pages/testimonials/Testimonial";
import Contact from "./pages/contact/Contact";
import PressRelease from "./pages/pressRelease/PressRelease";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="commitment" element={<Commitment />} />
          <Route path="Mining" element={<Mining />} />
          <Route path="PressRelease" element={<PressRelease />} />
          <Route path="partner" element={<Partner />} />
          <Route path="service" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
