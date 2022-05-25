import { useState } from "react";
import styled from "styled-components";
import Alert from "./components/Alert";
import ProductsList from "./components/ProductsList";
import { FaShoppingBag } from 'react-icons/fa';


const App = () => {
  const [name, setName] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    type: '',
    msg: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <Title><FaShoppingBag /> Shopping List</Title>
        <FormControl>
          <Input
            type='text'
            placeholder='e.g. Milk'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SubmitButton>
            { isEditing ? 'Edit' : 'Submit'}
          </SubmitButton>
        </FormControl>
      </Form>
      <ProductsContainer>
        <ProductsList />
        <ButtonClear>Clear list</ButtonClear>
      </ProductsContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 7rem;
  padding: 7rem 0;
  width: 70vw;
  background-color: gray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const FormControl = styled.div``;

const Input = styled.input`
  padding: .6rem;
`;

const SubmitButton = styled.button`
  padding: .6rem;
  cursor: pointer;
`;

const Title = styled.h2`
  
`;

const ButtonClear = styled.button`
  padding: .7rem;
  margin: 2rem auto;
  cursor: pointer;
`;
