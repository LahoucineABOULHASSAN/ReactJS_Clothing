import React, { useContext, useEffect, useState } from "react";
import Product from "./Product.jsx";
import "../../stylesheets/products.css";
import { ProductContext } from "../../contexts/ProductContext.jsx";
import Axios from "axios";
const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/products.json";
    const fetchData = async () => {
      const res = await Axios.get(url);
      setProducts(res.data);
    };
    fetchData(); // eslint-disable-next-line
  }, []);
  return (
    <section id="our-products" data-aos="flip-right">
      <p className="headline flex flex-row">
        Latest Products
        <div onClick={() => setShowAll(!showAll)}>
          {showAll ? (
            <span>
              SHOW LESS PRODUCTS<i className="chevron left icon"></i>
            </span>
          ) : (
            <span>
              SHOW ALL PRODUCTS<i className="chevron right icon"></i>
            </span>
          )}
        </div>
      </p>
      <div className="grid">
        {showAll
          ? products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : products
              .slice(0, 8)
              .map((product) => <Product key={product.id} product={product} />)}
      </div>
    </section>
  );
};

export default Products;
