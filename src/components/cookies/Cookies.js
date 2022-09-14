import React from "react";
import cookie from "../img/istockphoto-1208648146-612x612.jpg";

export const Cookies = () => {
 

  function acceptCookies() {
    const backgroundCookies = document.getElementById("cookies-background");
    const divCookies = document.getElementById("cookies");
    divCookies.classList.remove("active");
    backgroundCookies.classList.remove("active");

    localStorage.setItem('cookies-accepted',true)
  }

  if(!localStorage.getItem('cookies-accepted')){
    return (
        <>
          <div className="cookies active" id="cookies">
            <img src={cookie} alt="cookie" className="cookies-img" />
            <h3 className="cookies-title">Cookies</h3>
            <p className="cookies-parraph">
              Utilizamos Cookies propias y de terceros para mejorar nuestros
              servicios.
            </p>
            <button onClick={acceptCookies} className="cookies-button ">
              De acuerdo
            </button>
            <a className="cookies-link" href="aviso-cookies.html">
              Aviso de cookies
            </a>
          </div>
          <div className="cookies-background active" id="cookies-background"></div>
          <script src=""></script>
        </>
      );
  } else {
    return (
        <>
        <div className="cookies " id="cookies">
          <img src={cookie} alt="cookie" className="cookies-img" />
          <h3 className="cookies-title">Cookies</h3>
          <p className="cookies-parraph">
            Utilizamos Cookies propias y de terceros para mejorar nuestros
            servicios.
          </p>
          <button onClick={acceptCookies} className="cookies-button ">
            De acuerdo
          </button>
          <a className="cookies-link" href="/cookies-notice.html">
            Aviso de cookies
          </a>
        </div>
        <div className="cookies-background " id="cookies-background"></div>
        <script src=""></script>
      </>
    )
  }

  
};
