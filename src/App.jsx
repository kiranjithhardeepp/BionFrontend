import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Product from "./pages/ProductPage";
import Invoice from "./pages/Invoice";
import Navbar from "./components/Navbar";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/product" element={<Invoice />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/signin" element={<Invoice />} />
        <Route path="/signup" element={<Invoice />} />
        <Route path="*" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
