import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
	test("App renders without crashing", () => {
		render(<App />);
	});

	test("title of the application should be rendered", () => {
		render(<App />);
		const linkElement = screen.getByText(/shopping list/i); //litera i mówi nam że nie zwraca uwagi na litery, duże czy małe
		expect(linkElement).toBeInTheDocument();
	});

	test("input should be rendered", () => {
		render(<App />);
		const inputElement = screen.getByPlaceholderText(/e.g. Milk/i);
		expect(inputElement).toBeInTheDocument();
	});

	test("input should be empty", () => {
		render(<App />);
		const inputElement = screen.getByPlaceholderText(/e.g. Milk/i);
		expect(inputElement.value).toBe("");
	});

	test("button submit should be rendered", () => {
		render(<App />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
	});

	test("input should change", () => {
		render(<App />);
		const inputElement = screen.getByPlaceholderText(/e.g. Milk/i);
		const testValue = "test";

		fireEvent.change(inputElement, { target: { value: testValue } });
		expect(inputElement.value).toBe(testValue);
	});

	test("Form submit should not add product if input field is empty", () => {
		render(<App />);
		const btn = screen.getByText(/submit/i);
		fireEvent.click(btn);
	});

	test("Form submit should not `submit` method if input is empty", () => {
		const mockedSubmit = jest.fn();
		render(<App />);
		const button = screen.getByText(/submit/i);
		fireEvent.click(button);
		expect(mockedSubmit).not.toHaveBeenCalled();
	});

	// test("Form submit should go through succesfully", () => {
	// 	const mockedSubmit = jest.fn();
	// 	render(<App />);
	// 	const button = screen.getByText(/submit/i);
	// 	const input = screen.getByPlaceholderText(/e.g. Milk/i);

	// 	fireEvent.change(input, { target: { value: "bread" } });
	// 	fireEvent.click(button);

	// 	expect(mockedSubmit).toHaveBeenCalledTimes(1);
	// 	expect(mockedSubmit).toHaveBeenCalledWith({
	// 		id: "1",
	// 		title: "bread",
	// 	});
	// });
});
