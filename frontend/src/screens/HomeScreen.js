import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data'; data is no longer needed

function HomeScreen() {
  /* Creating State Hooks */
  const [products, setProducts] = useState([]);
  /* UseEffect takes 2 parameters */
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData(); /* to stop the function */
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {/*Use the MAP function and convert code to JSX */}
        {products.map((product) => (
          /* 
              Make a KEY prop to avoid errors.
            */
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
