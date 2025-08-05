import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/Home';
import Services from './services';
 
function App() {
  return (
    <>
     <Router>
      
        <Routes>
          <Route  index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      
    </Router>
    </>
  );
}

export default App;