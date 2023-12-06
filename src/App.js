import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Testimonials from "./pages/testimonials/Testimonials";
import Team from "./pages/team/Team";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
