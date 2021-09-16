import React, { useState } from 'react'
import {
    NavLink
  } from "react-router-dom";
import './app.scss'
import logo1 from './images/menu.png';

function Navbar() {
  const [show,setShow] = useState(0);
  return (
    <div>
    <div className="nav">  
           <p>
           Portfolio 
          </p>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active"> Home </NavLink>
          </li>
          <li>
          <NavLink to="/skills" exact activeClassName="active"> My Skills </NavLink>
          </li>
        <li>
          <NavLink to ="/works" exact activeClassName="active"> My Works </NavLink>
          </li>
        <li>
        <NavLink to ="/contact" exact activeClassName="active"> Contact </NavLink>
        </li>
      </ul>
      <img src= {logo1} alt="menu" title="menu" id="menu" onClick = {()=> setShow(!show)} />
     
      {show ?
      <div className="newMenu">
            <ul>
        <li>
          <NavLink to="/" exact activeClassName="active"> Home </NavLink>
          </li>
          <li>
          <NavLink to="/skills" exact activeClassName="active"> My Skills </NavLink>
          </li>
        <li>
          <NavLink to ="/works" exact activeClassName="active"> My Works </NavLink>
          </li>
        <li>
        <NavLink to ="/contact" exact activeClassName="active"> Contact </NavLink>
        </li>
      </ul>
      </div>
: null
}
    </div>
    </div>
  );
}

export default Navbar;
