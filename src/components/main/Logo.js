import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../img/creamerlogo.png";

export const Logo = () => {
  return (
    <div className="logo-div">
        <NavLink to='/'>
        <img src={logo} alt="logo" width="200rem" className="logo"/>

        </NavLink>
    </div>
  )
}
