import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ProductContextProvider from '../contexts/ProductContext';
import Products from './pages/Products';
import About from './pages/About';
const Body = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  const themeClass = theme.isLight ? 'lighter container' : 'dark container';
  const themeBtn = theme.isLight
    ? 'theme-btn moon big icon'
    : 'theme-btn sun big icon';
  return (
    <ProductContextProvider>
      <div className={themeClass}>
        <Products />
        <About />
        <i className={themeBtn} onClick={() => dispatch({ type: 'THEME' })}></i>
      </div>
    </ProductContextProvider>
  );
};

export default Body;
