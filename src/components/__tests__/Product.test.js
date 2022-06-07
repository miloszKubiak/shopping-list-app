import Product from "../Product";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Product Component", () => {
	const productMock = { id: 1, title: "milk" };
	const removeProductMock = jest.fn();
	const editProductMock = jest.fn();

	test("should render a product object", () => {
		render(<Product {...productMock} />);
		const productTitle = screen.getByText(productMock.title);
		expect(productTitle).toHaveTextContent(productMock.title);
	});

	test("should delete product item on click of delete button", () => {
		render(<Product {...productMock} onRemove={removeProductMock} />);
		const deleteBtn = screen.getByTestId("delete");
		fireEvent.click(deleteBtn);
  
		expect(removeProductMock).toHaveBeenCalledTimes(1);
		expect(removeProductMock).toHaveBeenCalledWith(productMock.id);
	})

	test("should edit product item on click of edit button", () => {
		render(<Product {...productMock} onEdit={editProductMock} />);
		const editBtn = screen.getByTestId("edit");

		fireEvent.click(editBtn);

		expect(editProductMock).toHaveBeenCalledTimes(1);
		expect(editProductMock).toHaveBeenCalledWith(productMock.id);
	});
});