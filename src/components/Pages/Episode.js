/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "../../App.css";
import Cards from "../Cards/Cards";
import InputGroup from '../Filters/Category/InputGroup';
import Footer from '../Footer/Footer';



const Episode = () => {
    let [id, setID  ] = useState(1);
    let [info, setInfo] = useState ([]);
    
    let [results, setResults] = useState ([]);
    let {air_date, name } = info;
    console.log(info);
    let api =`https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(()  => {
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
              data.characters.map((x) => { 
                return fetch(x).then((res) => res.json());

              })

            );
            setResults(a);
        })();
    },[api] );
  return (
    <div style={{background: "hsl(223 21% 16% )"}}>
        <div  className='container bg-new'>
        <div className='row'>
          <h1 className='text-center mb-4 text-light'>Episode: {" "}
          <span className='text-green'>{ name===""? "Unknown": name}</span> 
          </h1>
          <h5 className='text-center text-light mb-4'>
            Air Date{air_date===""? "Unknown": air_date}  
          </h5>
        </div>
        <div className='row'>
          <div className='col-3 text-light'>
            <h4 className="text-center mb-4 text-green">Pick Episodes</h4>
           <InputGroup setID={setID} name="Episode" total={51}/>

          </div>
          <div className='col-8'>
            <div className='row '>
              <Cards  page="/Episode/" results={results}/>
            </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
    </div>
    </div>
    
  )
};

export default Episode;