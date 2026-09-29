import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">WELCOME TO MY SHOP</span>

        <h1>
          Find Products
          <br />
          You <span>Love.</span>
        </h1>

        <p>
          Discover amazing products at great prices.
          Shop your favorite items from our collection.
        </p>

        <Link to="/products" className="shop-button">
          Explore Products →
        </Link>
      </div>

      <div className="hero-card">
        <div className="hero-circle">
          🛍️
        </div>

        <h3>Discover More</h3>
        <p>New products added regularly</p>
      </div>
    </section>
  );
}

export default Home;