import React, { useEffect } from "react";
//import Comment from "../components/comments/comment";
import ImageSlider from "../components/imageslider/imageslider";
//import { SliderData } from "../components/imageslider/sliderdata";
import SummaryBox from "../components/summarybox/summarybox";
import "../App.css"
import CheckBoxComponent from "../components/checkbox/checkboxcomp";
//import CommentForm from "../components/comments/commentform";
import CommentList from "../components/comments/commentlist";
//import { Dropdown } from "";
import { useState } from "react";

  
export default function Resources() {
    const [commentListx, setCommentListx]=useState([]);
    
    useEffect(()=> {
        
        const getComments = async () => {
        const response = await fetch('http://localhost:3000/page/1')
        console.log("This is the response:", response);
        const data = await response.json();
        console.log("And this is the data: ", data);
        setCommentListx(data)
        };
        getComments();
    }, [commentListx]);

    return (
        <div>
            <h1 className="resources-heading"> School of Code resources </h1>
            <ImageSlider />
            <SummaryBox className="summary-box"/>
            <CheckBoxComponent />
            <CommentList commentListx={commentListx}/>

        </div>
    );
}
