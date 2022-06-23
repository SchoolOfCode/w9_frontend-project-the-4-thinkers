import React from "react";
import { useState } from "react";
import "./comments.css"
//import { Dropdown } from "";
export default function CommentForm({ onSubmit }) {
  const [commentFieldValue, setCommentFieldValue] = useState("");
  function changeCommentFieldValue(e) {
    setCommentFieldValue(e.target.value);
  }
  return (
    <form>
      <div className="comments">
        <h3 className="comments-title">Comments</h3>
        <div className="comment-form-title">Write comment</div>
        <div className="input-field">
        <input onChange={changeCommentFieldValue}></input>
        <input className="comment-form-button"
          type="submit"
          value="Submit"
          onClick={function (e) {
            onSubmit(e, commentFieldValue);
          }}
        ></input>
        </div>
      </div>
    </form>
  );
}
