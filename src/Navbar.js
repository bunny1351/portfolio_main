import React from 'react'
import {
    NavLink
  } from "react-router-dom";
import './app.scss'

function Navbar() {
  return (
    <div className="nav">  
        <p>
          <NavLink to = "/"> Portfolio </NavLink>
          </p>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
          </li>
        <li>
          <NavLink to ="/works"> My Works </NavLink>
          </li>
        <li>
        <NavLink to ="/contact"> Contact </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
