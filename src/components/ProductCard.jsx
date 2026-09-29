import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description.slice(0, 80)}...
        </p>

        <div className="product-bottom">
          <span className="price">${product.price}</span>

          <span className="rating">
            ⭐ {product.rating}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="view-button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;