import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Product = ({ id, title, onRemove, onEdit }) => {
  return (
    <Container data-testid='product'>
      <Title>{title}</Title>
      <Buttons>
        <ButtonEdit
          data-testid='edit'
          type='button'
          onClick={() => onEdit(id)}
        >
          <FaEdit />
        </ButtonEdit>
        <ButtonDelete
          data-testid='delete'
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
  border-radius: .2rem;
  margin-top: .2rem;
  background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);
  width: 100%;
  ${mobile({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })}
`;

const Title = styled.p`
  margin-left: .4rem;
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
    margin: '.2rem',
  })}
`;

const ButtonEdit = styled.button`
  border: none;
  background: none;
  font-size: 1.2rem;
  color: whitesmoke;
  cursor: pointer;
  transition: color .2s ease-in;
  &:hover {
    color: gray;
  }
`;

const ButtonDelete = styled.button`
  border: none;
  background: none;
  font-size: 1.2rem;
  color: #e52a5a;
  cursor: pointer;
  transition: color .2s ease-in;
  &:hover {
    color: red;
  }
`;
