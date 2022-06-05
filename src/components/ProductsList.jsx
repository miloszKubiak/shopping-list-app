import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { mobile } from '../responsive';

const ProductsList = ({ products, removeProduct, editProduct }) => {
  return (
    <Container data-testid='products'>
      {products.map((product) => {
        const { id, title } = product;
        return (
          <Product
            id={id}
            key={id}
            title={title}
            onRemove={removeProduct}
            onEdit={editProduct}
          />
        );
      })}
    </Container>
  );
};

export default ProductsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  max-width: 90%;
  ${mobile({
    width: '12rem',
  })}
`;