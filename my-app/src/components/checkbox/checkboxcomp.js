import { useState } from "react";
import Checkbox from "./checkbox";
import "./checkbox.css"

function CheckBoxComponent() {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="App">
      <Checkbox 
        id="checkbox" 
        label="Completed" 
        value={checked} 
        onChange={onChange} 
      />      
    </div>
  );
}

export default CheckBoxComponent;