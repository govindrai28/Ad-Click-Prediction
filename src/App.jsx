// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AdPredictionForm from "./components/AdPredictionForm";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AdPredictionForm />
    </div>
  );
}

export default App;
