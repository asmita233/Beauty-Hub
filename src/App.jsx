
import React from 'react';
import Blog  from "./blog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



const App = () => {
  return (
    <Router>
      <Routes>

    <Route path="/" element={<Blog />} />

   </Routes>
  </Router>
    
  )
}

export default App;