import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { actionTypes } from '../reducer/Reducer';
import { useStateValue } from '../reducer/StateProvider';

export const Logout = () => {
    const [{ user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
          auth.signOut();
         
          dispatch({
            type: actionTypes.SET_USER,
            user: null,
          });
          navigate("/login");
        }
      };


  return (
    <>
          <button className='logout-button' onClick={handleAuth}>Cerrar sesion</button>
    </>
  )
}
