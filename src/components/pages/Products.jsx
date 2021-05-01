import React, { useContext, useEffect, useState } from "react";
import Product from "./Product.jsx";
import Loading from "../Loading.jsx";
import Error from "../Error.jsx";
import "../../stylesheets/products.css";
import { ProductContext } from "../../contexts/ProductContext.jsx";
import Axios from "axios";
const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/products.json";

    const fetchData = async () => {
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setProducts(res.data);
      } catch (err) {
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setError(error);
      }
    };

    fetchData(); // eslint-disable-next-line
  }, []);
  return (
    <section id="our-products" data-aos="flip-right">
      {products.length ? (
        <div>
          <div className="headline flex flex-row">
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
          </div>
          <div className="grid">
            {showAll
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : products
                  .slice(0, 8)
                  .map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
          </div>
        </div>
      ) : (
        !error && <Loading error={error} />
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default Products;
