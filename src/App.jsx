import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "./components/Alert";
import ProductsList from "./components/ProductsList";
import { FaShoppingBag } from 'react-icons/fa';
import { getLocalStorage } from "./utils";


const App = () => {
  const [name, setName] = useState('');
  const [productsList, setProductsList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    
    if (!name) {
      showAlert(true, 'danger', 'Please enter value 🤷‍♂️');
    } else if (name && isEditing) {
      setProductsList(
        productsList.map((product) => {
          if (product.id === editID) {
            return { ...product, title: name }
          }
          return product;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value changed ✔')
    } else {
      showAlert(true, 'success', 'Product added to the list 👌');
      const newProduct = {
        id: new Date().getTime().toString(), // Date function instead of an external library
        title: name,
      };
      setProductsList([...productsList, newProduct]);
      setName('');
    };
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  };

  const clearList = () => {
    showAlert(true, 'danger', 'Empty list 😒');
    setProductsList([]);
  };

  const removeProduct = id => {
    showAlert(true, 'danger', 'Product removed 👍');
    setProductsList(productsList.filter((product) => product.id !== id));
  };

  const editProduct = id => {
    const selectedProduct = productsList.find((product) => product.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(selectedProduct.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(productsList));
  }, [productsList]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
      {productsList.length > 0 && (
          <ProductsContainer>
          <ProductsList
            products={productsList}
            removeProduct={removeProduct}
            editProduct={editProduct}
          />
          <ButtonClear onClick={clearList}>Clear list</ButtonClear>
          </ProductsContainer>
        )}
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
  width: 90vw;
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
