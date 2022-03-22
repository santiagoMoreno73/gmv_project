import React from "react";

// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "../src/Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
