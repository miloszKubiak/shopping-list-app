import Alert from "../Alert";
import { render, screen } from "@testing-library/react";

describe("Alert Component", () => {
	test("alert component should be rendered", () => {
		render(<Alert />);
	});
});
