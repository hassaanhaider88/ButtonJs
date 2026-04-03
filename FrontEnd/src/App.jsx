import React from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllElements from "./Pages/AllElements";
import Footer from "./Components/Footer";
import ViewCode from "./Pages/ViewCode";
import Donate from "./Pages/Donate";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AddButton from "./Pages/AddButton";

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-elements" element={<AllElements />} />

        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/add-button" element={<AddButton />} />

        <Route path="/view-code/:id" element={<ViewCode />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
