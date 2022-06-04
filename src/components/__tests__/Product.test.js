import Product from "../Product";
import { render, screen } from "@testing-library/react";


describe("Product Component", () => {
	test("product component should be rendered", () => {
		render(<Product />);
	});
});
