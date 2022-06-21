import React from "react";
import Comment from "../components/comments/addComments";
import ImageSlider from "../components/imageslider/imageslider";
import { SliderData } from "../components/imageslider/sliderdata";
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
      <h1> School of Code resources </h1>
      <Comment />
     <ImageSlider slides={SliderData}/>
      </div>
 );
}
