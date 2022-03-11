/* eslint-disable no-unused-vars */

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react'
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
// import titulo from "./titulo.png";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import react from "react";
import Episode from "./components/Pages/Episode";
import Location from "./components/Pages/Location";
import Details from "./components/Cards/Details";
import Footer from "./components/Footer/Footer";
function App(){
  return(
    <Router>
      <div className="App">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Details/>}/>
        <Route path="/Episode" element={<Episode/>}/>
        <Route path="/Episode/:id" element={<Details/>}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/Location/:id" element={<Details/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        
      </Routes>
    </Router>
  );
}
const Home = () =>{
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetcheData, updateFetchedData] = useState ([]);
  let {info, results} = fetcheData;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {

    (async function (){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div >
      <div style={{background: "hsl(223 21% 16% )"}} className="App">
      <h1 className="text-center text-light">Characters</h1>
      
      {/* <h1 className="text-center ubuntu "> <img src= {titulo}className="mx-5 " style={{width: "370px"}} alt="#"></img> </h1> */}
      < Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="Container">
        <div className="row">
          
          <Filters 
          setSpecies={setSpecies}
          setGender={setGender}
          setStatus={setStatus} 
          setPageNumber={setPageNumber} 
          />
          
          <div className="col-lg-8 col-12">
            <div className="row">
            <Cards page="/" results = {results} />
            <Cards />
            <Cards />
            </div>
          </div>
        </div>
      
      </div> 
      <Pagination
       info={info} 
       pageNumber={pageNumber} 
       setPageNumber={setPageNumber}/>
       <div style={{background: "hsl(223 21% 16% )"}} >
        
          <Footer/>
           

            
         
       </div>
    </div>
  </div>
    
  );
}

export default App;
