import React, { createContext, useReducer, useState } from 'react';
import { navReducer } from '../reducers/ThemeReducer';
export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(navReducer, {
    isLight: true,
  });
  const [items] = useState([
    { link: '#home', value: 'home' },
    { link: '#our-products', value: 'our products' },
    { link: '#about-us', value: 'about us' },
    { link: '#useful-links', value: 'useful links' },
    { link: '#contact-us', value: 'contact us' },
  ]);
  return (
    <ThemeContext.Provider value={{ theme, items, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
