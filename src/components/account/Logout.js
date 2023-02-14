import React from "react";
import { HandleSignOut } from './account_functions/accountFunctions'


export const Logout = () => {
  const handleSignOut = HandleSignOut()

  const handleLogoutClick = () => {
    handleSignOut()
  }
  return (
    <>
      <button className="logout-button" onClick={handleLogoutClick}>
        Cerrar sesion
      </button>
    </>
  );
};
