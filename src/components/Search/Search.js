// import { preventOverflow } from "@popperjs/core";
import React from "react";
import styles from "./Search.module.scss";


const Search = ({setSearch, setPageNumber}) => {

  // let searchBox = document.openInputSearch("true");
  //  let  icon = document.getElementById ("icon");   
  //   icon.onclick = function (){
  //         searchBox.classList.toggle("active");
  //      }
  
  
    
  return (
    // <div id="searchBox" className={`${styles.searhBox} d-flex justify-content-center `}>
        <form className={` flex-sm-row flex-column aling-items-center d-flex justify-content-center  mb-4 p-5 sticky-bottom`}>
          <div id="searchBox" className={`${styles.searhBox} mb-3  ${styles.active.input}`}>
            <input placeholder="Buscar por personaje"  onChange={e=>{
              setPageNumber(1);
              setSearch(e.target.value);
            }}
            type="text" className={`${styles.input} `} ></input>
              <a onClick={e=>{e.preventDefault()}} id="icon" href="/#" className={`${styles.icon} ${styles.active.input} bi bi-search`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
               </svg></a>
                 
          </div>
              
           
         
    </form>
    
    
  )
}


export default Search;