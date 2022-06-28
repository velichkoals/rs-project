import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import React from "react";

it("Modal renders", () => {
  render(
    <Modal
      handleClose={() => {}}
      image=""
      name=""
      location=""
      gender=""
      origin=""
      show={true}
      species=""
      status=""
    />
  );
  const modal = screen.getByTestId("modal");
  expect(modal).toBeInTheDocument();
});
