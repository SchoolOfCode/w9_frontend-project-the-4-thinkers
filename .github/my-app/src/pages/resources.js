import React from "react";
//import Comment from "../components/comments/comment";
import ImageSlider from "../components/imageslider/imageslider";
//import { SliderData } from "../components/imageslider/sliderdata";
import SummaryBox from "../components/summarybox/summarybox";
import "../App.css"
import CheckBoxComponent from "../components/checkbox/checkboxcomp";
//import CommentForm from "../components/comments/commentform";
import CommentList from "../components/comments/commentlist";
//import { Dropdown } from "";
import { useState,useEffect } from "react";
import CommentForm from "../components/comments/commentform";

  
export default function Resources() {
    const [dataQ, setDataQ] = useState("");
    const [commentListx, setCommentListx]=useState([]);
    useEffect(function(){
        async function getComments (){
        const response = await fetch('http://localhost:3000/page/1')
            //console.log("This is the response:", response);
        const data = await response.json();
            //console.log("And this is the data: ", data);
        setCommentListx(data)
        }
        getComments();
    }, [dataQ]);
    
    async function handleSubmit (e,cFV) {
        console.log(cFV);
        e.preventDefault();
        let responseP = await fetch('http://localhost:3000/page/1', {
            method:'POST',
            //mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                user_id:1, 
                comment_id:5, 
                comment_text: cFV,
            }),
        });
        let dataP = responseP.json();	
        setDataQ(dataP);
    };
    
    return (
        <div>
            <h1 className="resources-heading"> School of Code resources </h1>
            <ImageSlider />
            <SummaryBox className="summary-box"/>
            <CheckBoxComponent />
            <CommentForm onSubmit={handleSubmit}  />
            <CommentList commentListx={commentListx}/>

        </div>
    );
};
