import React from "react"
import {useState} from "react"
import { SliderData } from "./sliderdata"

export default function ImageSlider(){

    const [current, setCurrent] = useState(0)
    return (
        <>
        <h1>Image Slider</h1>

            {SliderData.map((slide,index) => {
               return <img src= {slide.image} alt="Slides"/>
            })}
        </>
    )
}