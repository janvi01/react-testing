import { render, screen } from "@testing-library/react";
import HelloName from "./HelloName";

test("renders Hello with name", () => {
  render(<HelloName name="Janvi" />);
  const nameELement = screen.getByText("Hello Janvi");
  expect(nameELement).toBeInTheDocument();
});
