import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_.jpg",
  },
  {
    id: 4,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 5,
    title: "Solid Gold Petite Micropave",
    price: 168.00,
    description: "Satisfaction guaranteed. Beautiful piece of jewelry.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_.jpg",
  },
  // Add more products if required
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
