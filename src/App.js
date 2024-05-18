import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
