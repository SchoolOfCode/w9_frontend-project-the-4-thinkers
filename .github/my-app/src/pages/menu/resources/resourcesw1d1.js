import React from "react";
//import Comment from "../components/comments/comment";
import ImageSlider from "../../../components/imageslider/imageslider.js";
//import { SliderData } from "../components/imageslider/sliderdata";
import SummaryBox from "../../../components/summarybox/summarybox.js";
import "./resources.css";
import CheckBoxComponent from "../../../components/checkbox/checkboxcomp";
import CommentList from "../../../components/comments/commentlist.js";
//import { Dropdown } from "";
import { useState,useEffect } from "react";
import CommentForm from "../../../components/comments/commentform.js";
import BackToHomeButton from "../../../components/backtomenu/backtohome.js"

  
export default function Resources() {
    const [dataQ, setDataQ] = useState("");
    const [dataE, setDataE] = useState("");
    const [commentListx, setCommentListx]=useState([]);
    useEffect(function(){
        console.log("useEffect called")
        async function getComments (){
            console.log("getComments called")
        const response = await fetch('http://localhost:3000/page/1')
            //console.log("This is the response:", response);
        const data = await response.json();
            //console.log("And this is the data: ", data);
        setCommentListx(data)
        }
        getComments();
    }, [dataQ,dataE]);
    
    async function handleSubmit (e,text) {
        console.log("handleSubmit called")
        console.log(text);
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
                comment_text: text,
            }),
        });
        let dataP = responseP.json();	
        setDataQ(dataP);
    };
    
    async function handleDelete (e,commentId) {
        console.log(commentId);
        e.preventDefault();
        let responseD = await fetch('http://localhost:3000/page/1', {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                comment_id:commentId, 
            }),
        });
        let dataD = responseD.json();
        setDataE(dataD);
    }
        
    return (
        <div className="body">
             <h1 className="resources-heading">Week 1 Day 1 Study Materials</h1>
            <BackToHomeButton></BackToHomeButton>
            <ImageSlider />
            <SummaryBox className="summary-box"/>
            <CheckBoxComponent />
            <CommentForm onSubmit={handleSubmit}  />
            <CommentList commentListx={commentListx} handleDelete={handleDelete}/>

        </div>
    );
};
