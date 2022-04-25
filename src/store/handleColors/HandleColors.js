import BgDesktopLight from "../../assets/bg-desktop-light.jpg";
import BgDesktopDark from "../../assets/bg-desktop-dark.jpg";
import BgMobileLight from "../../assets/bg-mobile-light.jpg";
import BgMobileDark from "../../assets/bg-mobile-dark.jpg";

export const HandleColors = (TodoState, TodoBgRef, setTodoState) => {
  if (TodoState === false) {
    TodoBgRef.current.style.backgroundImage = `url(${BgDesktopLight})`;

    if (window.innerWidth < 767) {
      TodoBgRef.current.style.backgroundImage = `url(${BgMobileLight})`;
    }
    return setTodoState(true);
  } else {
    TodoBgRef.current.style.backgroundImage = `url(${BgDesktopDark})`;

    if (window.innerWidth < 767) {
      TodoBgRef.current.style.backgroundImage = `url(${BgMobileDark})`;
    }
    return setTodoState(false);
  }
};
