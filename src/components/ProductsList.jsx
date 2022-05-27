import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { mobile } from '../responsive';

const ProductsList = ({ products, removeProduct, editProduct }) => {
  return (
    <Container>
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
  max-width: 70%;
  max-height: 25rem;
  overflow-y:scroll;

  ${mobile({
    width: '15rem',
    maxHeight: '13rem'
  })}
`;