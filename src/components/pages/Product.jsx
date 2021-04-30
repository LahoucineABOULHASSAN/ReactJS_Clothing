import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Rating from './Rating';
const Product = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme.isLight ? 'light' : 'darker';
  return (
    <div>
      <img src={product.image} alt="Sony Camera" />
      <div className={themeClass + ' details'}>
        <p>
          <span className="product-name">{product.product}</span>
          <span className="product-price">${product.price}</span>
        </p>
        <p className="product-desc text-secondary">{product.description}</p>
        <p>
          <span className="product-reviews">Reviews({product.reviews})</span>
          <span className="product-rating">
            <Rating key={product.id} rating={product.rating} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Product;
