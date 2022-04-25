import React from "react";

//custom style
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Drag and drop to reorder list</p>
      <div className="attribution">
        <p>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <a href="https://artur-silva-rezende.netlify.app/" rel="noreferrer">
            Artur da Silva Rezende
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
