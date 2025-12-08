import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
