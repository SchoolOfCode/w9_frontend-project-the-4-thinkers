import React from "react";
import Comment from "./comment.js";
//import { Dropdown } from "";
export default function CommentList({commentListx}) {
    return (
        <>
        {commentListx.map(function(comment){
            console.log("map function called");
            return(
                <Comment text={comment.comment_text}/>
            )
        })}
        </>
    );
}
