import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item)} className="remove-from-cart-btn">
                Remove from Cart
              </button>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
