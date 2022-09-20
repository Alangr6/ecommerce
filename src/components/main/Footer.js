import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">
            Home
          </a>
          <a href="#">About</a>
          <a href="/questions">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p>Creamer Inc. &copy; 2022</p>
      </div>
    </footer>
  );
};
