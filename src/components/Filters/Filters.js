import React from 'react'
import Especies from './Category/Especies';
import Genero from './Category/Genero';
import Status from './Category/Status';
import "../../App.css";


const filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear=() =>{
    setStatus("") ;
    setPageNumber("") ;
    setGender("") ;
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className="col-lg-3 col-12 mb-5 ">
      <div style={{background: "hsl(223 21% 16% )", color: "rgb(54, 221, 4)"}} className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div 
      onClick={clear}
      className='text-center text-info text-decoration-underline mb-4'> 
        Clear filters

      </div>
      <div  className="accordion items button  " id="accordionExample">
          <Status  setPageNumber = {setPageNumber} setStatus = {setStatus}/>
          <Genero setGender={setGender} setPageNumber = {setPageNumber}/>
          <Especies setSpecies={setSpecies} setPageNumber = {setPageNumber} />

          
      </div>
    </div>
  )
}

export default filters