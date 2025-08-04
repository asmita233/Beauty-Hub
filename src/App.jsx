import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/Home';
 
function App() {
  return (
    <>
     <Router>
      
        <Routes>
          <Route  index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </Router>
    </>
  );
}

export default App;