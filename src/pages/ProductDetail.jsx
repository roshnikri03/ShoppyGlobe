import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import SuspenseFallback from '../components/SuspenseFallback';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) return <SuspenseFallback />;
  if (error) return <div className="error-container"><h2>Error: {error}</h2></div>;
  if (!product) return <div className="error-container"><h2>Product not found</h2></div>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: '2rem' }}>&larr; Back</button>
      <div className="product-detail">
        <div className="product-detail-image glass">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-detail-info glass" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating} / 5</p>
          <div style={{ marginTop: '2rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
