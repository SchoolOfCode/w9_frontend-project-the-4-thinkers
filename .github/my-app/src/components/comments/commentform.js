import React from "react";
import { useState } from "react";
//import { Dropdown } from "";
export default function CommentForm({onSubmit}) {
    const [commentFieldValue,setCommentFieldValue]=useState("");
    function changeCommentFieldValue(e) {
        setCommentFieldValue(e.target.value)
    };
    return (
        <form>
            <input onChange={changeCommentFieldValue}></input>
            <input 
                type="submit" 
                value="Submit" 
                onClick={function(e){
                    onSubmit(e,commentFieldValue)}
                }>
            </input>
        </form>
  );
};