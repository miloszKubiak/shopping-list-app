import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "./components/Alert";
import ProductsList from "./components/ProductsList";
import { FaShoppingBag } from "react-icons/fa";
import { getListFromLocalStorage } from "./utils";
import { mobile } from "./responsive";

const App = () => {
	const [name, setName] = useState("");
	const [productsList, setProductsList] = useState(getListFromLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		type: "",
		msg: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			showAlert(true, "danger", "Please enter value 🤷‍♂️");
		} else if (name && isEditing) {
			setProductsList(
				productsList.map((product) => {
					if (product.id === editID) {
						return { ...product, title: name };
					}
					return product;
				})
			);
			setName("");
			setEditID(null);
			setIsEditing(false);
			showAlert(true, "success", "Value changed ✔");
		} else {
			showAlert(true, "success", "Product added to the list 👌");
			const newProduct = {
				id: new Date().getTime().toString(), // Date function instead of an external library
				title: name,
			};
			setProductsList([...productsList, newProduct]);
			setName("");
		}
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, "danger", "Empty list 😒");
		setProductsList([]);
	};

	const removeProduct = (id) => {
		showAlert(true, "danger", "Product removed 👍");
		setProductsList(productsList.filter((product) => product.id !== id));
	};

	const editProduct = (id) => {
		const selectedProduct = productsList.find(
			(product) => product.id === id
		);
		setIsEditing(true);
		setEditID(id);
		setName(selectedProduct.title);
	};

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(productsList));
	}, [productsList]);

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} />}
				<Title>
					<FaShoppingBag style={{ fontSize: "1 rem" }} /> Shopping
					List
				</Title>
				<FormControl>
					<Input
						type="text"
						placeholder="e.g. Milk"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<SubmitButton>{isEditing ? "Edit" : "Submit"}</SubmitButton>
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
};

export default App;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5rem auto;
	padding: 2rem 0;
	width: 60vw;
	background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
	border-radius: 0.3rem;
	box-shadow: 0 0 0.5rem tomato;
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

const FormControl = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20rem;
	${mobile({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: ".3rem",
	})}
`;

const Input = styled.input`
	padding: 0.6rem;
	outline: none;
	border: none;
	width: 70%;
	border-bottom: 1px solid black;
	${mobile({
		width: "50%",
	})}
`;

const SubmitButton = styled.button`
	padding: 0.6rem;
	border: none;
	color: white;
	letter-spacing: 0.1rem;
	width: 30%;
	background-image: linear-gradient(to top left, #39b385, #9be15d);
	border-radius: 0.2rem;
	cursor: pointer;
	&:hover {
		background-image: linear-gradient(to top left, #409675, #a7e472);
	}
	${mobile({
		width: "50%",
	})}
`;

const Title = styled.h2`
	font-size: 2rem;
	color: black;
	font-family: "Lobster", cursive;
	letter-spacing: 0.2rem;
	color: white;
	${mobile({
		fontSize: "1rem",
	})}
`;

const ButtonClear = styled.button`
	padding: 0.7rem;
	margin: 2rem auto;
	background-image: linear-gradient(to top left, #e52a5a, #ff585f);
	border: none;
	border-radius: 0.2rem;
	color: white;
	letter-spacing: 0.1rem;
	cursor: pointer;
	&:hover {
		background-image: linear-gradient(to top left, #fd2e62, #e95058);
	}
`;
