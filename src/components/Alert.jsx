import React, { useEffect } from 'react';
import styled from 'styled-components';

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

`;

const SuccessAlert = styled.p`
  color: green;
`;

const DangerAlert = styled.p`
  color: red;
`;