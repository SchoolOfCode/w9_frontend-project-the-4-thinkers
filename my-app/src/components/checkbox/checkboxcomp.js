import { useState } from "react";
import Checkbox from "./checkbox";
import "./checkbox.css"

function CheckBoxComponent() {
  
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div >
      <Checkbox className="checkbox-ticker"
        value={checked} 
        onChange={onChange} 
        label="Section Reviewed" 
      />      
    </div>
  );
}

export default CheckBoxComponent;