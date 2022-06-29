import React from "react";
import { useState } from "react";
import "./comments.css";

export default function CommentForm({ onSubmit }) {
    const [commentFieldValue, setCommentFieldValue] = useState("");
    function changeCommentFieldValue(e) {
        setCommentFieldValue(e.target.value);
    }
    return (
        <form
            onSubmit={function (e) {
                e.preventDefault();
                if (commentFieldValue) {
                    onSubmit(e, commentFieldValue);
                    console.log("onSubmit called>>>>>>>");
                    setCommentFieldValue("");
                } else {
                    console.log("Please input a comment!");
                }
            }}>
            <div className="comments">
                <h3 className="comments-title">Discussion Section</h3>
                <div className="comment-form-title">Add comment: </div>
                <div className="input-field">
                    <input
                        className="input-box"
                        value={commentFieldValue}
                        onChange={changeCommentFieldValue}></input>
                    <input
                        className="comment-form-button"
                        type="submit"
                        value="Submit"></input>
                </div>
            </div>
        </form>
    );
}
