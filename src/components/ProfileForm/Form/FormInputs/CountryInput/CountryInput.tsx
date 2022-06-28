import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const CountryInput = (props: IProps) => {
  const { errors, register, handleChange } = props;
  return (
    <div className="item__wrapper">
      <div className="form__item">
        <div className="input-label">Country</div>
        <select
          className="form__item form__input form__input__country "
          id="country"
          defaultValue=""
          {...register}
          onChange={handleChange}
        >
          <option value="" disabled={true}>
            Select your country
          </option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Russia">Russia</option>
        </select>
      </div>
      <div className="form__error">{errors?.message}</div>
    </div>
  );
};

export default CountryInput;
