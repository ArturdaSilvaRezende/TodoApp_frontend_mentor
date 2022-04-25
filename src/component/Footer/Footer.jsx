import React, { useContext } from "react";

//custom style
import "./style/Footer.css";

//store
import { StoreContext } from "../../store/store";

const Footer = () => {
  const { TodoState } = useContext(StoreContext);

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: TodoState ? "#f4f4f6" : "hsl(235, 21%, 11%)",
      }}
    >
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
