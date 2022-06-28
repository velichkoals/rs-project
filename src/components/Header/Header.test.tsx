import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

it("Header renders", () => {
  const header = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(header).toMatchSnapshot();
});
