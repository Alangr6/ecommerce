import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navigate = () => {
  return (
    <nav className="navbar">
          <h4 className="hello-user">Hello Guest</h4>


      <div className="navbar-buttons">
        <IconButton aria-label="show cart items" color="inherit">
          <Badge badgeContent={1} color="error">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>

        <NavLink to="/">
          <button className="product-button">Home</button>
        </NavLink>
        <NavLink to="/products">
          <button className="product-button">Productos</button>
        </NavLink>
        <NavLink to="/questions">
          <button className="product-button">Preguntas</button>
        </NavLink>
        <NavLink to="/create-user">
          <button className="product-button">Mi cuenta</button>
        </NavLink>
        
      </div>
    </nav>
  );
};
