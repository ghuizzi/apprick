import React from 'react'
import Filterbtn from '../Filterbtn';

const Genero = ({setGender, setPageNumber}) => {
  let genders = ['female', 'male', 'genderless', 'unknown'];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
       Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-1">
        {genders.map((items, index)  => (
          <Filterbtn 
          task={setGender}
          setPageNumber = {setPageNumber} 
          key={index} 
          name="genders" 
          index={index} 
          items={items}/>
        ))}
        
      </div>
    </div>
  </div>
  );
};

export default Genero