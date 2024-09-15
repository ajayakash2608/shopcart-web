import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
