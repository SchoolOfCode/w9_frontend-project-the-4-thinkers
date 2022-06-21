//dropdown
import React from "react";

export default function Dropdown(week) {
  return (
    <div>
      <select name="selectList" id="selectList">
        <option value="week1">Week 1</option> {" "}
        <option value="week2">Week 2</option>
        <option value="week3">Week 3</option>
        <option value="week4">Week 4</option>
        <option value="week5">Week 5</option>
        <option value="week6">Week 6</option>
        <option value="week7">Week 7</option>
        <option value="week8">Week 8</option>
      </select>
    </div>
  );
}
