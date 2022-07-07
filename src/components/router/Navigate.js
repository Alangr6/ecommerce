import { Badge, IconButton, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../checkout/StateProvider";

const useStyles = makeStyles((theme) => ({
  cart: {
    color:'black',
  },
  badge: {
    color:'red',
    backgroundColor:'black'
  },
 
}));

export const Navigate = () => {

  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();


  return (
    <nav className="navbar">
      <div className="hello-user">
        <h4 className="hello-user">Hello Guest</h4>

        <NavLink to='/checkout'>
          <IconButton aria-label="show cart items" className={classes.cart}>
            <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCart fontSize="large" />
            </Badge>
          </IconButton>
        </NavLink>
      </div>

      <div className="navbar-buttons">
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
