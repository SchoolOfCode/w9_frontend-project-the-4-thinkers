import React from "react";
//import { Dropdown } from "";

export default function Comment({text,handleDelete,cId}) {
  return (
    <div>
        <h1>person1</h1>
        <p>{text}</p>
        <button onClick={function(e){handleDelete(e,cId)}}>Delete</button>
    </div>
  );
}