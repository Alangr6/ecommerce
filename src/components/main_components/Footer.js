import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="/">
            Home
          </a>
          <a href="#">About</a>
          <a href="/questions">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p>Creamer Inc. &copy; 2022</p>
      </div>
      <div className="policy-div">
        <a className="policy-paragraph" href="/legal-advice.html">
          {" "}
          Aviso legal
        </a>{" "}
        <a className="policy-paragraph" href="/privacy-policy.html">
          Politica de privacidad
        </a>
        <a className="policy-paragraph" href="/cookies-notice.html">
          Cookies{" "}
        </a>{" "}
        <a className="policy-paragraph" href="/">
          {" "}
          Condiciones de uso y venta
        </a>
      </div>

      <div className="footer-right">
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
      
      </div>
    </footer>
  );
};
