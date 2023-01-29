import { render, screen } from "@testing-library/react";
import Home from "./home";

test("Test Home Page", () => {
  render(<Home />);
  const home = screen.getByTestId("home-page");
  expect(home).toBeTruthy();
});
