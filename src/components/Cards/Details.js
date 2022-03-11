import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Footer from '../Footer/Footer';

const Details = () => {
  let {id} = useParams();
  let [fetcheData, updateFetchedData] = useState ([]);
  let {name, image, location, origin, gender, species, status,type} = fetcheData
  console.log(fetcheData);
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {

    (async function (){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
    

  return (
    <div style={{background: "hsl(223 21% 16% )", height: "100vh"}}>
        <div style={{background: "hsl(223 21% 16% )", vw: "100%"}}>
      <div className='container d-flex justify-content-center text-light'>
        <div className='d-flex flex-column gap-3'>
          <h1 className='text-center text-green'>{name}</h1>
          <img src={image} alt="" className='img-fluid'></img>
          {(()=>{
          if(status === "Dead"){
            return(
              <div className="badge bg-danger fs-5">{status}</div>
            )
          }
          else if(status === "Alive"){
            return(
              <div className= " badge bg-success fs-5">
              {status}</div>
            )
          }else{
            return(
              <div className=" badge bg-secondary fs-5">{status}</div>
            )
          }
        })()}
        <div className='content'>
          <div className='text-green'>Gender:  {"  "}
            <span className=" fw-bold text-light">{gender} </span>

          </div>
          <div className=' text-green'>Specie:  {"  "}
            <span className="fw-bold text-light"> {species} </span>

          </div>
          <div className='text-green'>type:  {"  "}
            <span className="fw-bold  text-light">{type=== "" ? "Unknown": type} </span>

          </div>
          <div className=' text-green'>Location:  {"  "}
            <span className="fw-bold text-light">{location?.name} </span>

          </div><div className=' text-green'>Origin: {"  "}
            <span className=" fw-bold text-light">{origin?.name} </span>

          </div>
          
        </div>
        </div>
      </div>  
    </div>
          
    </div>
    
  )
}

export default Details;