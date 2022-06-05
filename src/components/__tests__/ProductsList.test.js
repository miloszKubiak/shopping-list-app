import { render, screen } from "@testing-library/react";
import ProductsList from "../ProductsList";

describe("ProductsList Component", () => {
	const productsMock = [
		{
			id: 1,
			title: "milk",
		},
		{
			id: 2,
			title: "eggs",
		},
		{
			id: 3,
			title: "bread",
		},
	];

	test("should render ProductsList component", () => {
		render(<ProductsList products={productsMock} />);
		expect(screen.getByTestId("products")).toBeInTheDocument();
	});

	describe("when products exists", () => {
		test("should display 3 products", () => {
			render(<ProductsList products={productsMock} />);
			expect(screen.getAllByTestId("product").length).toEqual(3);
		});
	});
});
