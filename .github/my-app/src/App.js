import React from "react"
//import Login from "./pages/login"
import Menu from "./pages/menu/menu.js";
import Resources from "./pages/menu/resources/resources";
//mport HomePage from "./pages/HomePage";
import './App.css';
import { Route, Routes} from "react-router-dom"


function App() {
  return (
  <div>
  <Routes>
  
   <Route exact path="/" element={<Menu />} /> 
   <Route exact path="/resources/w2d1" element={<Resources />} /> 
   </Routes>
</div>
 
  );
}

export default App;
