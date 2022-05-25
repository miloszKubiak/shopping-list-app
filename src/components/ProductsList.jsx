import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductsList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => {
        const { id, title } = product;
        return (
          <Product key={id} title={title} />
        );
      })}
    </Container>
  );
};

export default ProductsList;

const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  max-width: 90%;
`;