import React, { useContext } from "react";

//custom style
import "./style/Header.css";

//images
import IconMoon from "./img/icon-moon.svg";
import IconSun from "./img/icon-sun.svg";

//store
import { StoreContext } from "../../store/store";

const Header = (props) => {
  const { TodoState, TodoBgRef, ChangeColors } = useContext(StoreContext);

  return (
    <header className="header" ref={TodoBgRef}>
      <div className="header__container">
        <a href=" #" className="header__logo font-weigth-700">
          Todo
        </a>
        <button className="header__btn" onClick={ChangeColors}>
          <img src={TodoState ? IconMoon : IconSun} alt="icon-moon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
