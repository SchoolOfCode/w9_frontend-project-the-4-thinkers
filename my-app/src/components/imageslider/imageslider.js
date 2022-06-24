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

 
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  

  return (
    <>

      <h2 className="sub-heading"> Slides and Summary information</h2>
        <LeftArrow className="icon-left-arrow" onClick={prevSlide} />
        <RightArrow className="icon-right-arrow" onClick={nextSlide} />
      <section >

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
      <div className="arrows">
        </div>
    </>
  );
}
