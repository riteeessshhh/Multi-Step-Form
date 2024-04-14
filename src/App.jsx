import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Description from "./Components/Description";
import Interest from "./Components/Interest";
import Info from "./Components/Info";
import Mathcheck from "./Components/Mathcheck";
import Final from "./Components/Final";
import Courses from "./Components/Courses";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Mathcheck" element={<Mathcheck />} />
          <Route path="/Final" element={<Final />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
