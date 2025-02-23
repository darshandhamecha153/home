import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </Card>
  );
};

export default ProductCard;
