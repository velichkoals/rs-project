import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import React from "react";

it("Modal renders", () => {
  render(<SearchBar handleSearch={() => {}} />);
  const searchBar = screen.getByTestId("searchBar");
  expect(searchBar).toBeInTheDocument();
});
