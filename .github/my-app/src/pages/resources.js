import React from "react";
import Comment from "../components/comments/addComments";
import ImageSlider from "../components/imageslider/imageslider";
import { SliderData } from "../components/imageslider/sliderdata";
import SummaryBox from "../components/summarybox/summarybox";
import "../App.css"
import CheckBoxComponent from "../components/checkbox/checkboxcomp";
// title 
// images with sliders 
// box with Lorem ipsum text
// render the checkbox and the feedback form
// related reading text
// render comments (add/ display)
// render next page and back to menu

//import { Dropdown } from "";

export default function Resources() {
  return (
    <div>
      <h1 className="resources-heading"> School of Code resources </h1>
    
     <ImageSlider />
     <SummaryBox className="summary-box"/>
     <CheckBoxComponent />
      </div>
 );
}
