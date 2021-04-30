import React, { createContext, useReducer, useState } from "react";
import { navReducer } from "../reducers/ThemeReducer";
export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(navReducer, {
    isLight: true,
  });
  const [items] = useState([
    { elem: "#our-products", value: "our products" },
    { elem: "#about-us", value: "about us" },
    { elem: "#footer", value: "useful links" },
    { elem: "#footer", value: "contact us" },
  ]);
  return (
    <ThemeContext.Provider value={{ theme, items, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
