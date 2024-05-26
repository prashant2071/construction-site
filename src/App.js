import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import NoPageFound from "./pages/NoPageFound";
import Services from "./pages/service/Services";
import Partner from "./pages/partner/Partner";
import Commitment from './pages/commitment/Commitment';
import Mining from './pages/mining/Mining';
import Project from './pages/project/Project';
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="Commitment" element={<Commitment />} />
          <Route path="Mining" element={<Mining />} />
          <Route path="card" element={<Card/>} />
          <Route path="partner" element={<Partner/>} />
          <Route path="service" element={<Services/>} />
          <Route path="project" element={<Project/>} />
          <Route path="*" element={<NoPageFound/>} />
          
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
