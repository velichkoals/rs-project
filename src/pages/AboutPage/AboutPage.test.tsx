import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";
import React from "react";

it("AboutPage renders", () => {
  render(<AboutPage />);
  expect(screen.getByText(/this is about us page/i));
});
