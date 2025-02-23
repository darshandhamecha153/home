import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';

const products = [
  { name: 'Modern Lamp', price: '$50', image: '/images/lamp.jpg' },
  { name: 'Decor Vase', price: '$30', image: '/images/vase.jpg' }
];

const Products = () => {
  return (
    <>
      <Header />
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
