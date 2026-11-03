
import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../Cart.css";

function Cart() {
  const { cartItems, dispatch } = useOutletContext();

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Convert formatted price into number
  const formatPrice = (price) =>
    Number(String(price || 0).replace(/,/g, ""));

  // Format currency
  const formatCurrency = (amount) =>
    "₹" +
    amount.toLocaleString("en-IN", {
      maximumFractionDigits: 2
    });

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + formatPrice(item.price) * item.quantity,
    0
  );

  // Calculate total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate discount
  let discountPercentage = 0;

  if (subtotal >= 5000) {
    discountPercentage = 25;
  } else if (subtotal >= 3500) {
    discountPercentage = 20;
  } else if (subtotal >= 2000) {
    discountPercentage = 10;
  }

  const discount = (subtotal * discountPercentage) / 100;

  // Shipping charges
  const shipping = subtotal >= 499 || subtotal === 0 ? 0 : 40;

  // Final amount
  const totalAmount = subtotal - discount + shipping;

  // Quantity handlers
  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="cart-page">

      {/* Page Heading */}
      <div className="cart-heading">
        <h1>My Shopping Cart</h1>
        <p>
          Review your items and proceed to checkout.
        </p>
      </div>

      {cartItems.length === 0 ? (

        /* EMPTY CART UI */
        <div className="empty-cart-page">

          <div className="empty-cart-icon">
            <i className="bi bi-cart-x"></i>
          </div>

          <h2>Your Cart is Empty</h2>

          <p>
            Looks like you haven't added anything to your cart yet.
            Explore our collection and find something you love!
          </p>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            <i className="bi bi-bag"></i>
            Continue Shopping
          </Link>

        </div>

      ) : (

        /* CART CONTENT */
        <div className="cart-container">

          {/* Cart Table */}
          <div className="cart-table-wrapper">

            <div className="cart-table-heading">
              <h2>Shopping Items</h2>
              <span>{totalItems} Items</span>
            </div>

            <table className="cart-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => {

                  const itemPrice = formatPrice(item.price);
                  const itemTotal = itemPrice * item.quantity;

                  return (
                    <tr key={item.id}>

                      {/* Product Details */}
                      <td className="cart-product">

                        <div className="cart-product-info">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-product-image"
                          />

                          <div>
                            <h4>{item.name}</h4>
                            <span>
                              {item.category}
                            </span>
                          </div>

                        </div>

                      </td>

                      {/* Price */}
                      <td>
                        <strong>
                          {formatCurrency(itemPrice)}
                        </strong>
                      </td>

                      {/* Quantity */}
                      <td>
                        <div className="quantity-control">

                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>

                        </div>
                      </td>

                      {/* Item Total */}
                      <td>
                        <strong className="item-total">
                          {formatCurrency(itemTotal)}
                        </strong>
                      </td>

                      {/* Remove */}
                      <td>
                        <button
                          type="button"
                          className="remove-item-btn"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          title="Remove item"
                        >
                          <i className="bi bi-trash3"></i>
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>

            </table>

            {/* Cart Footer */}
            <div className="cart-footer">

              <Link
                to="/products"
                className="continue-shopping"
              >
                <i className="bi bi-arrow-left"></i>
                Continue Shopping
              </Link>

              <button
                type="button"
                className="clear-cart-btn"
                onClick={clearCart}
              >
                <i className="bi bi-trash"></i>
                Clear Cart
              </button>

            </div>

          </div>

          {/* Order Summary */}
          <aside className="cart-sidebar">

            <div className="order-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal ({totalItems} items)</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>

              <div className="summary-row discount-row">
                <span>
                  Discount ({discountPercentage}%)
                </span>

                <strong>
                  - {formatCurrency(discount)}
                </strong>
              </div>

              <div className="summary-row">
                <span>Shipping</span>

                <strong>
                  {shipping === 0
                    ? "FREE"
                    : formatCurrency(shipping)}
                </strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>Total Amount</span>
                <strong>{formatCurrency(totalAmount)}</strong>
              </div>

              <button
                type="button"
                className="checkout-btn"
                onClick={() => setOrderPlaced(true)}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
                <i className="bi bi-arrow-right"></i>
              </button>

              <button
                type="button"
                className="coupon-btn"
              >
                <i className="bi bi-tag"></i>
                Apply Coupon
              </button>

              <p className="shipping-note">
                {subtotal >= 499
                  ? "Congratulations! You got free shipping."
                  : `Add ${formatCurrency(499 - subtotal)} more for free shipping.`}
              </p>

            </div>

            {/* Secure Payment */}
            <div className="secure-box">

              <i className="bi bi-shield-check"></i>

              <div>
                <strong>Secure Checkout</strong>
                <p>Your information is safe and secure.</p>
              </div>

            </div>

          </aside>

        </div>

      )}

      {/* Order Success Popup */}
      {orderPlaced && cartItems.length > 0 && (

        <div className="order-popup-overlay">

          <div
            className="order-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-popup-title"
          >

            <div className="success-icon">
              <i className="bi bi-check-lg"></i>
            </div>

            <h2 id="order-popup-title">
              Order Placed Successfully!
            </h2>

            <p>
              Thank you for shopping with ShopKart.
              Your order has been placed successfully.
            </p>

            <h3>
              Total: {formatCurrency(totalAmount)}
            </h3>

            <button
              type="button"
              className="popup-ok-btn"
              onClick={() => {
                setOrderPlaced(false);
                dispatch({ type: "CLEAR_CART" });
              }}
            >
              Continue Shopping
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;
