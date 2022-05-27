import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Alert = ({ type, msg, removeAlert }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000)

    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return (
    <Container>
      {type === 'success'
        ?
        <SuccessAlert>{msg}</SuccessAlert>
        :
        <DangerAlert>{msg}</DangerAlert>
      }
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
  })}
`;

const SuccessAlert = styled.p`
  padding: .5rem .7rem;
  color: white;
  border-radius: .5rem;
  background-image: linear-gradient(to top left, #39b385, #9be15d);
  ${mobile({
    width: '80%'
  })}
`;

const DangerAlert = styled.p`
  padding: .5rem .7rem;
  color: white;
  border-radius: .5rem;
  background-image: linear-gradient(to top left, #e52a5a, #ff585f);
`;