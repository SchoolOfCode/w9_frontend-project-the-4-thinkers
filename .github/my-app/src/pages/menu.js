import React, { useState } from "react";
import Dropdown from "../components/Dropdownmenu/Dropdown.js";
import "../App.css";

import OptionList from "../components/Dropdown2/OptionList/OptionList.js";
import { menuItems } from "../components/Dropdown2/Weeks.js";
import MenuItems from "../components/Dropdown2/MenuItems.js";

const Menu = () => {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Logo
        </a>
        <OptionList />;
      </div>
    </header>
  );
};

export default Menu;

// Display title of page
// Display an image
// Render the Dropdown component
// 5 option buttons that rely on state change

// export default function Menu() {
// const [value, setValue] = useState("");
// const handleSelect = (e) => {
//   console.log(e.target.value);
//   setValue(e.target.value);
// };

//   const [selected, setSelected] = useState("");

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     console.log(event.target);

//     setSelected(event.target.value);
//   };
//   const options = [
//     { value: "", text: "--Choose a week--" },
//     { value: "week1", text: "Week 1" },
//     { value: "week2", text: "Week 2" },
//     { value: "week3", text: "Week 3" },
//   ];

//   return (
//     <div>
//       <h1> School of Code </h1>
//       <img
//         src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
//         alt="school of code logo"
//         id="logo"
//       />
//       <h2> Recap Resources</h2>
//       <p id="select_week">Select week:</p>
{
  /* <Dropdown
  formLabel="Choose a week"
  value={menuItems}
  onChange={handleSelect}
  action="http://localhost:3000/resources"
></Dropdown>; */
}
//       <p id="choice">You selected {setValue}!</p>
//       <select value={selected} onChange={handleChange}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.text}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
