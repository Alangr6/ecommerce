import { Badge, IconButton, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../reducer/StateProvider";
import { auth } from "../firebase/Firebase";

const useStyles = makeStyles((theme) => ({
  cart: {
    color: "black",
  },
  badge: {
    color: "red",
    backgroundColor: "black",
  },
}));

export const Navigate = () => {
  const classes = useStyles();
  const [{ user, basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log();
      if(authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user:authUser
        })
      }
    })
  }, [])
  
 

  return (
    
    <nav className="navbar">
      <div className="hello-user">
        <NavLink className='hello-user-nav' to="/account">
          <h2 className="hello-user">Hola {!user ? 'usuario' : user.email }</h2>
        </NavLink>

        <NavLink to="/checkout-page">
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
        <NavLink to={!user ? '/login' : '/account'}>
          <button className="product-button">Mi cuenta</button>
        </NavLink>
      </div>
    </nav>
  );
};
