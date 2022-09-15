
import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../reducer/StateProvider";
import { auth } from "../firebase/Firebase";
import logo from "../img/creamerlogo.png";



export const Navigate = () => {
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
      <div className="hello-user-div">
        <NavLink className='hello-user-nav' to={!user ? '/login' :`/account/${user.uid}`} >
          <h2 className="hello-user">Hola {!user ? 'usuario' : user.email }</h2>
        </NavLink>

        
      </div>
    
     
    </nav>
  );
};
