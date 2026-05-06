import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import BookService from "./pages/BookService";
import BookCourse from "./pages/BookCourse";
import MyBookings from "./pages/MyBookings";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Certificates from "./pages/Certificates";
import SuccessStories from "./pages/SuccessStories";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/book-course" element={<BookCourse />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
