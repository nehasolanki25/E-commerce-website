import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="status-box">
        <div className="loader"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-box error">
        <h2>{error}</h2>

        <button
          onClick={() => navigate("/products")}
          className="back-button"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <section className="details-page">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-container">
        <div className="details-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="details-content">
          <span className="category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="details-rating">
            ⭐ {product.rating}
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <h2 className="details-price">
            ${product.price}
          </h2>

          <p>
            <strong>Brand:</strong> {product.brand || "N/A"}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <button className="buy-button">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;