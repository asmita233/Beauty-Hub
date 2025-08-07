
import React from 'react';
import Hero from "./Hero";
import About from "./About";
import Blog from "./blog";
import Footer from "../components/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



const App = () => {
  return (
    <Router>
      <Routes>

    <Route path="/" element={
      <>
      <Hero />
      <About />
      <Blog />
      <Footer />

      </>
    } />

   </Routes>
   {/* <Footer /> */}
   
  </Router>







  
    
  );
};

export default App;