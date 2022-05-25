import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';


const Product = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Buttons>
        <ButtonEdit
          type='button'
        >
          <FaEdit />
        </ButtonEdit>
        <ButtonDelete
          type='button'
        >
          <FaTrash />
        </ButtonDelete>
      </Buttons>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  margin: .7rem 0;
`;

const Title = styled.p`
  
`;

const Buttons = styled.div`
  
`;

const ButtonEdit = styled.button`
  
`;

const ButtonDelete = styled.button`
  
`;
