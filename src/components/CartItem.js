// src/components/CartItem.js
import React from "react";

// Shows one row in the cart. The values come in as props and are destructured in the brackets
function CartItem({
  id,
  title,
  price,
  img,
  quantity,
  updateQuantity,
  removeFromCart,
}) {
  return (
    <div className="cart-item-row-node">
      <div className="cart-item-thumbnail-frame">
        <img src={img} alt={title} />
      </div>

      {/* Title and the buttons to change quantity or delete the item */}
      <div className="cart-item-details-metadata">
        <h4>{title}</h4>
        <div className="cart-item-action-controls">
          <button
            onClick={() => updateQuantity(id, -1)}
            className="qty-adjustment-toggle"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => updateQuantity(id, 1)}
            className="qty-adjustment-toggle"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(id)}
            className="cart-delete-action-link"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Price for this row = price x quantity */}
      <div>
        <strong>${(price * quantity).toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default CartItem;
