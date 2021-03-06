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

	test("should display 3 products", () => {
		render(<ProductsList products={productsMock} />);
		expect(screen.getAllByTestId("product").length).toEqual(3);
	});

	test("should not to be rendered when products prop has value as empty array", () => {
		render(<ProductsList products={[]} />);
		expect(screen.queryByTestId("product")).not.toBeInTheDocument();
	});
});
