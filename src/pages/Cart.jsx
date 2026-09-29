function Cart() {
  return (
    <section className="empty-cart">
      <div className="cart-icon">🛒</div>

      <h1>Your Cart</h1>

      <p>
        Your shopping cart is currently empty.
      </p>

      <button className="shop-button">
        Start Shopping
      </button>
    </section>
  );
}

export default Cart;