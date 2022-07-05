import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/creamerlogo.png";

export const Navigate = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" width="150rem" />
      <h4 className="hello-user">Hello Guest</h4>

      <div className="navbar-buttons">
        <IconButton aria-label="show cart items" color="inherit">
          <Badge badgeContent={1} color="error">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>

        <NavLink to="/">
          <button className="home-button">Home</button>
        </NavLink>
        <NavLink to="/products">
          <button className="products-button">Productos</button>
        </NavLink>
        <NavLink to="/questions">
          <button className="products-button">Preguntas</button>
        </NavLink>
        <NavLink to="/create-user">
          <button className="products-button">Mi cuenta</button>
        </NavLink>
        
      </div>
    </nav>
  );
};
