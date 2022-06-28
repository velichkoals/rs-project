import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header/Header";

import App from "./App";

it("App renders", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

test("Router test", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const homeLink = screen.getByTestId("home-link");
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByTestId("about-link");
  expect(aboutLink).toBeInTheDocument();

  const profileLink = screen.getByTestId("profile-link");
  expect(profileLink).toBeInTheDocument();
});
