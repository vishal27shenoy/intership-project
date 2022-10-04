import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pageone />} />
          <Route path="/pagetwo" element={<Pagetwo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
