import React, { createContext, useState } from 'react';
export const ProductContext = createContext();
const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
