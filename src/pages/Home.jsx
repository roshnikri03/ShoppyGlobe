import { useDispatch, useSelector } from 'react-redux';
import { selectSearchText, setSearchText } from '../redux/searchSlice';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductList from '../components/ProductList';
import SuspenseFallback from '../components/SuspenseFallback';

const Home = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);
  const { products, loading, error } = useFetchProducts();

  const handleSearchChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      {loading && <SuspenseFallback />}
      {error && <div className="error-container"><h2>Error: {error}</h2><p>Please try again later.</p></div>}
      {!loading && !error && <ProductList products={filteredProducts} />}
    </div>
  );
};

export default Home;
