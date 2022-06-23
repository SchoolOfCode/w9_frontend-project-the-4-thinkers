import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";

//import OptionList from "../components/Dropdown2/OptionList/OptionList.js";
import { menuItems } from "../../../components/Weeksdata/Weeks";
//import MenuItems from "../components/Dropdown2/MenuItems.js";
export default function Menu() {
  const [selected, setSelected] = useState("");
  const [indexItems, setIndexItems] = useState(0);

  //console.log("hello")
  const HandleChange = (event) => {
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  useEffect(() => {
    if (selected === "Week 1") {
      setIndexItems(0);
    } else if (selected === "Week 2") {
      setIndexItems(1);
    } else if (selected === "Week 3") {
      setIndexItems(2);
    }
  }, [selected]);
  const navigate = useNavigate();

  const navigateToResources = (res) => {
    // console.log(res);
    navigate(`/resources/${res}`);
  };

  // console.log("no",indexItems)
  // console.log("yes",menuItems[indexItems].days[0]);

  return (
    <div>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="school of code logo"
        id="logo"
      />
      <h2> Recap Resources</h2>
      <div id="select_area">
        <p id="select_week">Select week:</p>

        <select className="select-button" onChange={HandleChange}>
          {menuItems.map((weeks, index) => (
            <option key={index}>{weeks.week}</option>
          ))}
        </select>
      </div>
      <div className="button-group">
        <p className="btn">
          {/* {selected && menuItems[indexItems] */}
          {menuItems[indexItems].days.map((item, index) => {
            return (
              <button
                id="day_buttons"
                onClick={() => {
                  navigateToResources(item.day);
                }}
                key={index}
              >
                {item.day}
              </button>
            );
          })}
        </p>
      </div>
    </div>
  );
}

{
  /* <div className="button-group">
      <button className="btn" onClick={navigateToResources} >{menuItems[indexItems].days[0].day}</button>
      <button className="btn" >{menuItems[indexItems].days[1].day}</button>
      <button className="btn" >{menuItems[indexItems].days[2].day}</button>
      <button className="btn" >{menuItems[indexItems].days[3].day}</button>
</div> */
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
