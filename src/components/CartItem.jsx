import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { product, quantity } = item;

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="cart-item glass">
      <div className="cart-item-image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-title">{product.title}</h3>
        <p className="cart-item-price">${product.price}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button onClick={handleDecrement} className="qty-btn" disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="qty-btn">+</button>
        </div>
        <button onClick={handleRemove} className="btn btn-danger">Remove</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
