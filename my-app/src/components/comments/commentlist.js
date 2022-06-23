import React from "react";
import Comment from "./comment.js";
import "./comments.css"
//import { Dropdown } from "";
export default function CommentList({commentListx,handleDelete}) {
    return (
        <div className="comments-container">
        {commentListx.map(function(comment){
            console.log("map function called");
            return(
                <Comment text={comment.comment_text} handleDelete={handleDelete} cId={comment.comments_id}/>
            )
        })}
        </div>
    );
}