import React from "react";
import "./ProfileForm.css";
import Form from "./Form/Form";

export interface IProps {
  parentCallback: (
    name: string,
    email: string,
    gender: string,
    correctBirthday: string,
    country: string,
    photo: string,
    allow: string,
    id: number
  ) => void;
}

const ProfileForm = function (props: IProps) {
  const { parentCallback } = props;

  return (
    <div className="setup-form-wrapper" data-testid="form-wrapper">
      <div className="setup-form__title">
        <div className="setup-form__welcome">Welcome back!</div>
        <div className="setup-form__setup">Setup your profile</div>
      </div>
      <Form parentCallback={parentCallback} />
    </div>
  );
};

export default ProfileForm;
