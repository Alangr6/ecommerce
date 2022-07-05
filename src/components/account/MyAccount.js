import React from "react";
import { NavLink } from "react-router-dom";

export const MyAccount = () => {
  return (
    <div className="navbar-account">
      <NavLink to="/create-user">
        <button className="account-button">Crear usuario</button>
      </NavLink>
      <NavLink to="/login">
        <button className="account-button">Iniciar sesion</button>
      </NavLink>
    </div>
  );
};
