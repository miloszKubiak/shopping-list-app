import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
	test("title of the application should be rendered", () => {
		render(<App />);
		const linkElement = screen.getByText(/shopping list/i);
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
});
