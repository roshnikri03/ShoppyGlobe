import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../redux/cartSlice';

const Header = () => {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <header className="header">
      <Link to="/">
        <h1>ShoppyGlobe</h1>
      </Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link cart-icon-container">
          🛒 Cart
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
