import React from "react"
//import Login from "./pages/login"
import Menu from "./pages/menu/menu/menu.js";
import Resources from "./pages/menu/resources/resourcesw1d1";
import Resources2 from "./pages/menu/resources/resources2.js";
//mport HomePage from "./pages/HomePage";
import { Route, Routes} from "react-router-dom"
import "./App.css"


function App() {
  return (
  <div >
  <Routes>
   <Route exact path="/" element={<Menu />} /> 
   <Route exact path="/resources/W1D1" element={<Resources />} /> 
   <Route exact path="/resources/W2D1" element={<Resources2 />} /> 
   </Routes>
</div>
 
  );
}

export default App;
