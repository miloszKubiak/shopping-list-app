import Product from "../Product";
import { render, screen } from "@testing-library/react";


describe("Product Component", () => {
	const productMock = { id: 1, title: 'milk'}

	test("should render a product object", () => {
		render(<Product {...productMock} />);
		const productTitle = screen.getByText(productMock.title);
		expect(productTitle).toHaveTextContent(productMock.title);
	});
});
