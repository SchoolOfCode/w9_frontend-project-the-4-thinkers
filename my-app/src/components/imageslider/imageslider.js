import "./slider.css";
import React from "react";
import { useState } from "react";
import { SliderData } from "./sliderdata";
import {
    FaArrowAltCircleRight as RightArrow,
    FaArrowAltCircleLeft as LeftArrow,
  } from "react-icons/fa";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  // this function will go to the next image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // this function will go to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // Here we will map through the image array and get each image

  return (
    <>

      <h2 className="sub-heading"> Slides and Summary information</h2>
      <section className="slider">
        <LeftArrow className="left-arrow" onClick={prevSlide} />
        <RightArrow className="right-arrow" onClick={nextSlide} />

        {SliderData.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img className="image" src={slide.image} alt="Slides" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
