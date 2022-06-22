import React, { useState } from "react";
//import "./App.css";
import { menuItems } from "../components/Dropdown2/Weeks";

export default function HomePage() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [indexItems, setIndexItems] = useState(0);

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = () => {
    setIndexItems(1);
    setShowResults(true);
  };

  return (
    <div className="App">
      
      <h1> Menu </h1>
      <select className="select-button">
        {menuItems.map((weeks, index) => (
          <option key={index}>{weeks.week}</option>
        ))}
      </select>
      <div>
        <ul>
          {menuItems[indexItems].days.map((day) => {
            return (
              <button onClick={() => optionClicked(day)}>{day.day}</button>
            );
          })}
        </ul>
      </div>
      )
    </div>
  );
}
