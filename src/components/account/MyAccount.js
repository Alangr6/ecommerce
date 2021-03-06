import React from "react";
import { Navigate, NavLink } from "react-router-dom";

export const MyAccount = () => {
  return (
    <nav className="navbar-account">
      <NavLink to="/create-user">
        <button className="account-button">Crear usuario</button>
      </NavLink>
      <NavLink to="/login">
        <button className="account-button">Iniciar sesion</button>
      </NavLink>
    </nav>
  );
};
