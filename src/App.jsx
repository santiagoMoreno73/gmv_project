import React from "react";

// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "../src/Components/Home";
import Muros from "./Components/Muros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muros" element={<Muros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
