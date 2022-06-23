import React from "react";
import "./comments.css"
//import { Dropdown } from "";

export default function Comment({text,handleDelete,cId}) {
  return (
    <article className="comment">
        <div className="comment-author">Zainab</div>
        <p className="comment-content">{text}</p>
        <button className="comment-delete-button" onClick={function(e){handleDelete(e,cId)}}>Delete</button>
    </article>
  );
}