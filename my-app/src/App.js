import React from "react"
import Home from "./pages/home"
import Login from "./pages/login"
import './App.css';
import { Route, Routes} from "react-router-dom"


function App() {
  return (
  <div>
  <Routes>
   <Route exact path="/" element={<Home />} /> 
   <Route exact path="/login" element={<Login />} /> 
   </Routes>
</div>
 
  );
}

export default App;
