import React from "react";

export default function Week(week) {
  return (
    <>
      <div value={week.value}>
        <div>
          <a href="http://localhost:3000/resources">Week 1 Day 1</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 1 Day 2</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 1 Day 3</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 1 Day 4</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 1 Day 5</a>
        </div>
      </div>
      <div value="week2">
        <div>
          <a href="http://localhost:3000/resources">Week 2 Day 1</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 2 Day 2</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 2 Day 3</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 2 Day 4</a>
        </div>
        <div>
          <a href="http://localhost:3000/resources">Week 2 Day 5</a>
        </div>
      </div>
    </>
  );
}
