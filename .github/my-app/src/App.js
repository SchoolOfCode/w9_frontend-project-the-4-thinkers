import React from "react";
//import Login from "./pages/login"
import Menu from "./pages/menu/menu/menu.js";
import Resources from "./pages/menu/resources/resourcesw1d1";
import Resources2 from "./pages/menu/resources/resourcesw2d1.js";
//mport HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/resources/Day1" element={<Resources />} />
        <Route exact path="/resources/W2Day1" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
