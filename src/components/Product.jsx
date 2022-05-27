import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Product = ({ id, title, onRemove, onEdit }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Buttons>
        <ButtonEdit
          type='button'
          onClick={() => onEdit(id)}
        >
          <FaEdit />
        </ButtonEdit>
        <ButtonDelete
          type='button'
          onClick={() => onRemove(id)}
        >
          <FaTrash />
        </ButtonDelete>
      </Buttons>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .2rem;
  width: 80%;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
  })}
`;

const Title = styled.p`
  margin-left: .6rem;
  letter-spacing: .1rem;
  color: white;
  ${mobile({
    textAlign: 'center',
    margin: '.3rem auto'
  })}
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: .6rem;
  ${mobile({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '.2rem auto',
  })}
`;

const ButtonEdit = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  color: whitesmoke;
  cursor: pointer;
`;

const ButtonDelete = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  color: tomato;
  cursor: pointer;
`;
