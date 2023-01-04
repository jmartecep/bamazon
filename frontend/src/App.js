import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">bamazon</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {/*Use the MAP function and convert code to JSX */}
          {data.products.map((product) => (
            /* 
              Make a KEY prop to avoid errors.
            */
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
