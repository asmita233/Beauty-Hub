import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Services from "./services";
import Signup from "./pages/signUp";
import Landing from "./pages/landing";
import Nav from "./components/Nav";
import SignIn from "./pages/signIn";
import Blog from "./Blog";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Services" element={<Services/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
