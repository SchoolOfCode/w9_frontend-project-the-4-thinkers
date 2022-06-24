import "./checkbox.css"

const Checkbox = ({ label, value, onChange }) => {
    return (
      <div className="checkbox-ticker">
        <input 
           
          type="checkbox" 
          checked={value} 
          onChange={onChange} 
        />
        <label className="label">{ label }</label>
      </div>
    );
  };
  
  export default Checkbox;