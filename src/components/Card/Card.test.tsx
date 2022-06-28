import { render, screen } from "@testing-library/react";
import Card from "../Card/Card";
import React from "react";

it("Card renders", () => {
  render(
    <Card id={1} image="12" name="Morty" handleOpen={() => {}} key="123" />
  );
  const card = screen.getByTestId("card__item");
  expect(card).toBeInTheDocument();
});
