import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBarItem = ({ item }) => {
  const { theme, dispatch } = useContext(ThemeContext);
  const themeClass = theme.isLight ? 'nav-item light' : 'nav-item darker';
  const activeClass = item.value === 'home' ? ' active' : '';
  return (
    <a
      className={themeClass + activeClass}
      href={item.link}
      onClick={(event) => dispatch({ type: 'IS_ACTIVE', event })}
    >
      {item.value}
    </a>
  );
};

export default NavBarItem;
