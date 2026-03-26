import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home";
// (Optional pages – create later)
const BoilerService = () => <h1>Boiler Service Page</h1>;
const BoilerRepair = () => <h1>Boiler Repair Page</h1>;
const NewBoiler = () => <h1>New Boiler Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;