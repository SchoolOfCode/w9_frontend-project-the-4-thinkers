import React from "react";
import "./comments.css";

export default function Comment({ text, handleDelete, cId, aId }) {
    return (
        <article className="comment">
            <div className="comment-author">author:{aId}</div>
            <p className="comment-content">{text}</p>
            <button
                className="comment-delete-button"
                onClick={function (e) {
                    handleDelete(e, cId);
                }}>
                Delete
            </button>
        </article>
    );
}
