import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cards.module.scss";


const Cards = ({ results, page }) => {
  let display;
  console.log(results);
  if(results){
    display = results.map(x => {
      let {id, name, image, location, status } = x ;
      return (
        
        <Link 
       
        style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
        className='col-lg-4 col-md-6 col-12 position-relative  mb-4 text-dark caja'>
           
              <div  className={` ${styles.container} `}>
        <div className={`${styles.cards} flex-column d-flex justify-content-center` }>
        <img src={image} alt="" className={`${styles.img} img-fluid`}></img>
        <div style={{padding: "10px"}} className='content'>
          <div className='fs-4 fw-bold mb-4'>
            {name}
          </div>
          <div>
            <div className='fs-6 '>Last location </div>
            <div className='fs-5'>{location.name}</div>
          </div>

        </div>
        </div>
        {(()=>{
          if(status === "Dead"){
            return(
              <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
            )
          }
          else if(status === "Alive"){
            return(
              <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
            )
          }else{
            return(
              <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
            )
          }
        })()}
        
      </div>
        </Link>
    )
    });
  }  else{
      // display = "personaje no encontrado :/ ";
  }
  
  return <>{display}</>;
  
};

export default Cards;