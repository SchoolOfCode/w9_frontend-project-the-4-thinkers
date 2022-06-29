import React from "react";
import ImageSlider from "../../../components/imageslider/imageslider.js";
import SummaryBox from "../../../components/summarybox/summarybox.js";
import "./resources.css";
import CheckBoxComponent from "../../../components/checkbox/checkboxcomp";
import CommentList from "../../../components/comments/commentlist.js";
import { useState, useEffect } from "react";
import CommentForm from "../../../components/comments/commentform.js";
import BackToHomeButton from "../../../components/backtomenu/backtohome.js";

export default function Resources() {
    const [dataQ, setDataQ] = useState("");
    const [dataE, setDataE] = useState("");
    const [commentListx, setCommentListx] = useState([]);
    useEffect(
        function () {
            console.log("useEffect called");
            async function getComments() {
                console.log("getComments called");
                const response = await fetch("http://localhost:3000/page/1");
                const data = await response.json();
                setCommentListx(data);
            }
            getComments();
        },
        [dataQ, dataE]
    );

    async function handleSubmit(e, text) {
        console.log("handleSubmit called");
        console.log(text);
        e.preventDefault();
        let responseP = await fetch("http://localhost:3000/page/1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: 1,
                comment_id: 5,
                comment_text: text,
            }),
        });
        let dataP = responseP.json();
        setDataQ(dataP);
    }

    async function handleDelete(e, commentId) {
        console.log(commentId);
        e.preventDefault();
        let responseD = await fetch("http://localhost:3000/page/1", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment_id: commentId,
            }),
        });
        let dataD = responseD.json();
        setDataE(dataD);
    }

    return (
        <div className="body">
            <img
                src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                alt="school of code logo"
                className="logo"
            />
            <BackToHomeButton />
            <h1 className="resources-heading"> Week 1 Day 1 Study Materials</h1>
            <ImageSlider />
            <SummaryBox className="summary-box" />
            <CheckBoxComponent />
            <CommentForm onSubmit={handleSubmit} />
            <CommentList
                commentListx={commentListx}
                handleDelete={handleDelete}
            />
        </div>
    );
}
