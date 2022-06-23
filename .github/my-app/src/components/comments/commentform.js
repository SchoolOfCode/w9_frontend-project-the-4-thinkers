import React from "react";
import { useState } from "react";
//import { Dropdown } from "";
export default function CommentForm({onSubmit}) {
    const [commentFieldValue,setCommentFieldValue]=useState("");
    function changeCommentFieldValue(e) {
        setCommentFieldValue(e.target.value)
    };
    return (
        <form 
            onSubmit={function(e){
                e.preventDefault();
                    if (commentFieldValue){
                        onSubmit(e,commentFieldValue);
                        console.log("onSubmit called>>>>>>>");
                        setCommentFieldValue("");
                    }
                    else {
                        console.log("Please input a comment!")
                    }
            }} >
            <input value={commentFieldValue} onChange={changeCommentFieldValue}></input>
            <input 
                type="submit" 
                value="Submit" 
                >
            </input>
        </form>
  );
};