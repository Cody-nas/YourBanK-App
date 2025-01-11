import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import About from './Pages/About';
import Security from './Pages/Security';
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </>
  );
}

export default App;
