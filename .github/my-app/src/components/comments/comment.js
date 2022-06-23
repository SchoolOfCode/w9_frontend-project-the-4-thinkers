import React from "react";
import "./comments.css"
//import { Dropdown } from "";

export default function Comment({text,handleDelete,cId}) {
  return (
    <div className="comment">
        <div className="comment-author">person1</div>
        <p className="comment-content">{text}</p>
        <button className="comment-delete-button" onClick={function(e){handleDelete(e,cId)}}>Delete</button>
    </div>
  );
}