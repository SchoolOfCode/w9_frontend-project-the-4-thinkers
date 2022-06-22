import React from "react";
import Comment from "./comment.js";
//import { Dropdown } from "";

export default function CommentList({responseArray}) {
    console.log(responseArray);
    //let commentArray=response.payload;
    //console.log(commentArray);
    return (
        <>
        {responseArray.map((comment)=>(
            <Comment text={comment.comment_text}/>
        )
        )}
        </>
    )
}