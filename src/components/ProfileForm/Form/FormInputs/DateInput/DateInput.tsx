import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const DateInput = (props: IProps) => {
  const { errors, register, handleChange } = props;
  return (
    <div className="item__wrapper">
      <div className="form__item">
        <div className="input-label">Date of birth</div>
        <div className="form__input__date">
          <input
            min="1900-01-01"
            max="2024-01-01"
            type="date"
            id="date-of-birth"
            placeholder="date of birth"
            {...register}
            onChange={handleChange}
            className="form__input"
          />
        </div>
      </div>
      <div className="form__error">{errors?.message}</div>
    </div>
  );
};

export default DateInput;
