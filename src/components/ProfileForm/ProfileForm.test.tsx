import { render, screen } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import React from "react";

it("Modal renders", () => {
  render(<ProfileForm parentCallback={() => {}} />);
  const profileForm = screen.getByTestId("form-wrapper");
  expect(profileForm).toBeInTheDocument();
});
