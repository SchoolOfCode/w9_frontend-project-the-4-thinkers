// beack to home button
import "./backtohome.css"
// home button icon which navigates to the resources page 

import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function BackToHomeButton(){
const navigate = useNavigate();
const navigateToHome = () => {
    navigate(`/`);
  };
return (
    <FaHome className="home-button-icon" onClick={navigateToHome} >Back to Menu</FaHome>
)
}