import React, { useContext, useEffect } from 'react';
import Product from './Product.jsx';
import '../../stylesheets/products.css';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import Axios from 'axios';
const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/products.json';
    const fetchData = async () => {
      const res = await Axios.get(url);
      setProducts(res.data);
    };
    fetchData(); // eslint-disable-next-line
  }, []);
  return (
    <section id="our-products" data-aos="flip-right">
      <p className="headline">
        Latest Products
        <span>
          <a href="#home">
            VIEW ALL PRODUCTS <i className="chevron right icon"></i>
          </a>
        </span>
      </p>
      <div className="grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
