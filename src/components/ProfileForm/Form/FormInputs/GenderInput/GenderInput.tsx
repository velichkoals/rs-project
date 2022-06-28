import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const GenderInput = (props: IProps) => {
  const { errors, register, handleChange } = props;
  return (
    <div className="item__wrapper">
      <div className="form__item">
        <div className="input-label">Select your gender</div>
        <div className="form__item__gender-wrapper">
          <div className="form__item_gender">
            <input
              {...register}
              onChange={handleChange}
              type="radio"
              id="Male"
              value="Male"
            />
            <label htmlFor="Male" className="form__gender__label">
              Male
            </label>
          </div>
          <div className="form__item_gender">
            <input
              type="radio"
              {...register}
              onChange={handleChange}
              id="Female"
              value="Female"
            />
            <label htmlFor="Female" className="form__gender__label">
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="form__error">{errors?.message}</div>
    </div>
  );
};

export default GenderInput;
