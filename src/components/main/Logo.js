import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/creamerlogo.png";
import { useStateValue } from "../reducer/StateProvider";
import { auth } from "../firebase/Firebase";
import { actionTypes } from "../reducer/Reducer";

export const Logo = () => {
  const [{ user, basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log();
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
        <NavLink to="/">
          <button className="product-button">Home</button>
        </NavLink>
        <NavLink to="/products">
          <button className="product-button">Productos</button>
        </NavLink>
        <NavLink to="/questions">
          <button className="product-button">Preguntas</button>
        </NavLink>
        <NavLink to={!user ? "login" : "/account"}>
          <button className="product-button">Mi cuenta</button>
        </NavLink>
      </div>
    </div>
  );
};
