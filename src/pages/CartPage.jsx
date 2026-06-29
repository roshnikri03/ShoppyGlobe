import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotalItems } from '../redux/cartSlice';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
        <h2>Your cart is empty</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: '2rem' }}>Your Cart ({totalItems} items)</h2>
      <div className="cart-list">
        {cartItems.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className="glass" style={{ padding: '2rem', marginTop: '2rem', borderRadius: '12px', textAlign: 'right' }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/checkout')} 
          style={{ marginTop: '1rem' }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
