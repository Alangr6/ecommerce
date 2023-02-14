import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/creamerlogo.png";
import { useStateValue } from "../reducer/StateProvider";
import { auth } from "../firebase/Firebase";
import { actionTypes } from "../reducer/Reducer";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cart: {
    color: "whitesmoke",
  },


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
  }, [user]);

  return (
    <div className="logo-div2">
      <div className="logo-div">
        <NavLink to="/">
          <img src={logo} alt="logo" width="130rem" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <NavLink to="/">
          <button className="navbar-button">Home</button>
        </NavLink>
        <NavLink to="/products">
          <button className="navbar-button">Productos</button>
        </NavLink>
        <NavLink to="/questions">
          <button className="navbar-button2">Preguntas</button>
        </NavLink>
        <NavLink to={!user ? "login" : `/account/${user.uid}/data-account`}>
          <button className="navbar-button3">
           {!user ? 'Iniciar sesion' :  <i className="fa-solid fa-circle-user fa-1x"></i>}
          </button>
        </NavLink>
        <div className="hello-user-div">
          <NavLink to="/checkout-page">
            <IconButton aria-label="show cart items" className={classes.cart}>
              <Badge
                overlap="rectangular"
                badgeContent={basket?.length}
                color="secondary"
              >
                <ShoppingCart fontSize="medium" />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
