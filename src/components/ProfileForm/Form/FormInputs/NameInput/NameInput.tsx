import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const NameInput = (props: IProps) => {
  const { errors, register, handleChange } = props;
  return (
    <div className="item__wrapper">
      <div className="form__item">
        <div className="input-label">Name</div>
        <input
          {...register}
          className="form__item form__input"
          type="text"
          id="name"
          onChange={handleChange}
          placeholder="Alexey"
        />
      </div>
      <div className="form__error">{errors?.message}</div>
    </div>
  );
};

export default NameInput;
