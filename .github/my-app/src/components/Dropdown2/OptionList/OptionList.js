import { menuItems } from "../Weeks";
import MenuItems from "../MenuItems.js";

const OptionList = () => {
  return (
    <div>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default OptionList;
