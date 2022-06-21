import React from "react"
import Login from "./pages/login"
import Menu from "./pages/menu";
import Resources from "./pages/resources";
import './App.css';
import { Route, Routes} from "react-router-dom"


function App() {
  return (
  <div>
  <Routes>
  
   <Route exact path="/login" element={<Login />} /> 
   <Route exact path="/menu" element={<Menu />} /> 
   <Route exact path="/resources" element={<Resources />} /> 
   </Routes>
</div>
 
  );
}

export default App;
