import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
