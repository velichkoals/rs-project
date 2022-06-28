import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import React from "react";

describe("HomePage tests", () => {
  it("HomePage renders", async () => {
    const homePage = render(<HomePage />);
    const cards = screen.getByTestId("cards");
    expect(cards).toBeInTheDocument();

    const searchBar = screen.getByTestId("searchBar");
    expect(searchBar).toBeInTheDocument();

    await setTimeout(() => {
      const card = screen.getByTestId("card");
      expect(card).toBeInTheDocument();
      fireEvent.click(card);
      const modal = waitFor(() => screen.getByTestId("modal"));
      expect(modal).toBeInTheDocument();
    }, 1000);
    expect(homePage).toMatchSnapshot();
  });
});
