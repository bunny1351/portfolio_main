import React from 'react'
import {
    NavLink
  } from "react-router-dom";
import './app.scss'

function Navbar() {
  return (
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
    </div>
  );
}
export default Navbar;
