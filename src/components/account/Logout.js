import React from "react";
import { HandleSignOut } from './account_functions/accountFunctions'


export const Logout = () => {
  const handleSignOut = HandleSignOut()

  const handleLogoutClick = () => {
    handleSignOut()
  }
  console.log('user');
  return (
    <>
      <button className="logout-button" onClick={handleLogoutClick}>
        Cerrar sesion
      </button>
    </>
  );
};
