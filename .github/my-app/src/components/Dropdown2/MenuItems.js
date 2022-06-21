import Dropdown from "./Dropdown2.js";

const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.days.day ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.week}{" "}
          </button>
          <Dropdown submenus={items.days.day} />
        </>
      ) : (
        <a href="/#">{items.week}</a>
      )}
    </li>
  );
};

export default MenuItems;
