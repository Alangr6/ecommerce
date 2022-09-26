import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/creamerlogo.png";
import { useStateValue } from "../reducer/StateProvider";
import { auth } from "../firebase/Firebase";
import { actionTypes } from "../reducer/Reducer";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { basketItems } from "../account/FecthData";

const useStyles = makeStyles((theme) => ({
  cart: {
    color: "#bfbb8a",

  },
  badge: {
    color: "red",
    backgroundColor: "black",
  },
  size:{
    height:'200px'
  }
}));

export const Logo = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const classes = useStyles();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  
  return (
    <div className="logo-div2">
      <div className="logo-div">
        <NavLink to="/">
          <img src={logo} alt="logo" width="130rem" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <NavLink className="product-button2" to="/">
          <button className="product-button">Home</button>
        </NavLink>
        <NavLink className="product-button2" to="/products">
          <button className="product-button">Productos</button>
        </NavLink>
        <NavLink className="product-button2" to="/questions">
          <button className="product-button">Preguntas</button>
        </NavLink>
        <NavLink
          className="product-button2"
          to={!user ? "login" : `/account/${user.uid}/data-account`}
        >
          <button className="product-button"><i className="fa-solid fa-circle-user fa-1x"></i></button>
        </NavLink>
        <div className="hello-user-div">
          <NavLink className="product-button2" to="/checkout-page">
            <IconButton aria-label="show cart items" className={classes.cart}>
              <Badge overlap="rectangular" badgeContent={basket?.length}  color="secondary">
                <ShoppingCart fontSize="large"/>
              </Badge>
            </IconButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
