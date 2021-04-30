import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../stylesheets/nav.css';
import NavBarItem from './NavBarItem';
const NavBar = () => {
  const { theme, items, dispatch } = useContext(ThemeContext);
  const themeClass = theme.isLight ? 'light' : 'darker';
  return (
    <nav>
      <div className={themeClass + ' topnav'} id="myTopnav">
        <div className="logo">
          <span>clothing </span>App
        </div>
        <div className="menu">
          {items.map((item) => (
            <NavBarItem key={item.value} item={item} />
          ))}
          <div
            href="#"
            className="navBtn"
            onClick={() => dispatch({ type: 'DISPLAY_NAV' })}
          >
            <i className="bars icon responsive-btn"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;