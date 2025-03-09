import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home"; // Ensure the correct file extension (.js or .jsx)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
