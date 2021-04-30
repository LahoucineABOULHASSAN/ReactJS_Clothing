import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const NavBarItem = ({ item }) => {
  const { theme, dispatch } = useContext(ThemeContext);
  const themeClass = theme.isLight ? "nav-item light" : "nav-item darker";
  const activeClass = item.value === "home" ? " active" : "";
  return (
    <span
      className={themeClass + activeClass}
      onClick={(event) =>
        dispatch({ type: "IS_ACTIVE", event, elem: item.elem })
      }
    >
      {item.value}
    </span>
  );
};

export default NavBarItem;
