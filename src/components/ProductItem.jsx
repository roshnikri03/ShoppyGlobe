import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card glass">
      <Link to={`/product/${product.id}`}>
        <div className="product-image-container">
          <img src={product.thumbnail} alt={product.title} className="product-image" loading="lazy" />
        </div>
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        <p className="product-price">${product.price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
