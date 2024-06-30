// import sum from "../sum";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load Header Component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});
