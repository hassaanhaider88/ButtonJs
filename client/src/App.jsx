import React from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllElements from "./Pages/AllElements";
import Footer from "./Components/Footer";
import ViewCode from "./Pages/ViewCode";
import CreateNew from "./Pages/CreateNew";
import Docs from "./Pages/Docs";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Settings from "./Pages/Settings";
import FeedBack from "./Pages/FeedBack";
import UserProfilePage from "./Pages/UserProfile";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-elements" element={<AllElements />} />
        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/feedback" element={<FeedBack />} />

        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/view-code/:id" element={<ViewCode />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
