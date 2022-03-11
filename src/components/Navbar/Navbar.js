import React from 'react';
import titulo from "./titulo.png";
import {NavLink, Link} from "react-router-dom";
import "../../App.css";
import { Fragment } from 'react/cjs/react.production.min';


const Navbar = () => {
  return (
    <Fragment>
          <nav style={{background: "hsl(223 21% 16% )"}}  className="navbar navbar-expand-lg navbar-dark text-success p-0 fixed-top">
    <div className="container">
    <Link to="/" className="text-center ubuntu navbar-brand"> <img src= {titulo}className="mx-5 " style={{width: "200px"}} alt="#"></img> </Link>
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
          <style jsx>
            {`
            button[aria-expanded="false"] > .close{
              display:none;
            }
            button[aria-expanded="true"] > .open{
              display:none;
            }
            `}
          </style>
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className="fas fa-bars open"></i>
        <i className="fas fa-times close"></i>
        
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav fs-5">
          <NavLink active={true} to="/" className="nav-link " aria-current="page" >
            Character
          </NavLink>
          <NavLink to="/Episode" className="nav-link" >
            Episodes
          </NavLink>
          <NavLink to="/Location" className="nav-link" >
            Location
          </NavLink>
          
        </div>
      </div>
    </div>
  </nav>
  <div>
    
  </div>
    </Fragment>
  

  )
}

export default Navbar