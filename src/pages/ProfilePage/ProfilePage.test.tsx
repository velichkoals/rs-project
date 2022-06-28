import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import React from "react";

it("ProfilePage renders", () => {
  const profilePage = render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  );
  expect(profilePage).toMatchSnapshot();
});
