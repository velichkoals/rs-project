import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const EmailInput = (props: IProps) => {
  const { errors, register, handleChange } = props;
  return (
    <div className="item__wrapper">
      <div className="form__item">
        <div className="input-label">Email</div>
        <input
          className="form__item form__input"
          type="text"
          {...register}
          onChange={handleChange}
          placeholder="mail@website.com"
        />
      </div>
      <div className="form__error">{errors?.message}</div>
    </div>
  );
};

export default EmailInput;
