import React from 'react'

const Filterbtn = ({name, index, items, task, setPageNumber}) => {
  return (

    <div>
      <style jsx>

        {`
        .x:checked + label{
          background-color: #0b5ed7;
        }

        input[type="radio"]{
          display:none;
        }
        `}
      </style>
        <div className="form-check">
            <input
            onClick={() =>{
              setPageNumber(1);
              task(items);
            }}
            className="form-check-input" 
            type="radio" 
            name={name} 
            id={`${name}-${index}`} 

            />

            <label className="btn btn-outline-success" for={`${name}-${index}`}>
              {items}
              </label>
        </div>
        
    </div>
  )
}

export default Filterbtn