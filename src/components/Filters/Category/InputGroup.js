import React from 'react';
import "../../../App.css";

const InputGroup = ({total, name, setID}) => {
    // console.log([...Array(total).keys()])
  return (
    <div className="input-group mb-3 bg-new">
        
        <select 
        onChange={e=> setID(e.target.value)}
        style={{background: "hsl(223 21% 16% )", border: "1px solid rgb(54, 221, 4)"}}  
        className="form-select text-light" 
        id={name}
        >
          <option value="1" selected>
            Choose...
          </option>
            {[...Array(total).keys()].map((x)=>{
               return (
                <option value={x + 1}>
                {name} - {x + 1}
                </option>
               );
               
            })}
            
            
        </select>
    </div>
  )
}

export default InputGroup