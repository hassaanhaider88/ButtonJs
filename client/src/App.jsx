import React from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllElements from "./Pages/AllElements";
import Footer from "./Components/Footer";
import ViewCode from "./Pages/ViewCode";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-elements" element={<AllElements />} />
        <Route path="/create-new" element={<AllElements />} />
        <Route path="/donate" element={<AllElements />} />
        <Route path="/docs" element={<AllElements />} />
        <Route path="/docs" element={<AllElements />} />
        <Route path="/view-code/:id" element={<ViewCode />} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;
