import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home";
import BoilerService from "./pages/BoilerService";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BoilerRepair from "./pages/BoilerRepair";
// (Optional pages – create later)


const NewBoiler = () => <h1>New Boiler Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/boiler-service" element={<BoilerService />} />
        <Route path="/boiler-repair" element={<BoilerRepair />} />
        <Route path="/new-boiler" element={<NewBoiler />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;