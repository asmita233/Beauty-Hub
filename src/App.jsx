
import React from 'react';
import Hero from "./components/Hero";
import Blog  from "./blog";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



const App = () => {
  return (
    <Router>
      <Routes>

    <Route path="/" element={
      <>
      <Hero />
      <Blog />

      </>
    } />

   </Routes>
   {/* <Footer /> */}
   
  </Router>







  
    
  );
};

export default App;