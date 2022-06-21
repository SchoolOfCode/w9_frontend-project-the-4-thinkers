import React, { useState } from "react";
//import Dropdown from "../components/Dropdownmenu/Dropdown.js";
import "../App.css";

//import OptionList from "../components/Dropdown2/OptionList/OptionList.js";
import { menuItems } from "../components/Dropdown2/Weeks.js";
//import MenuItems from "../components/Dropdown2/MenuItems.js";

export default function Menu() {

  const [selected, setSelected] = useState("");
  
  const HandleChange = (event) => {
         console.log(event.target.value);
  setSelected(event.target.value)
  // 
  }
  return (
    <div>
      <h1> School of Code </h1>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="school of code logo"
        id="logo"
      />
      <h2> Recap Resources</h2>
      <p id="select_week">Select week:</p>
     
      <select onChange={HandleChange} >
        {menuItems.map((items, index) => (
          <option key={index} >
            {items.week}
          </option>
        ))}
      </select>
      <p>{selected}</p>
      
    </div>
  );
}



// const Menu = () => {
//   const [selected, setSelected] = useState("");

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     console.log(event.target);
//     return (
//       <header>
//         <div className="nav-area">
//           <a href="/#" className="logo">
//             Logo
//           </a>
//           <OptionList />;
//           <select value={selected} onChange={handleChange}>
//             {menuItems.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.text}
//               </option>
//             ))}
//           </select>
//         </div>
//       </header>
//     );
//   };
// };

// export default Menu;

// Display title of page
// Display an image
// Render the Dropdown component
// 5 option buttons that rely on state change