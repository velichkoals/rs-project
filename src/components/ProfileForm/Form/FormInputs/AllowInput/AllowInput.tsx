import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  register: UseFormRegisterReturn;
}

const AllowInput = (props: IProps) => {
  const { register, handleChange } = props;
  return (
    <div>
      <div className="form__item">
        <input
          type="checkbox"
          id="receive-emails"
          className="form__item__checkbox"
          {...register}
          onChange={handleChange}
        />
        <label
          htmlFor="receive-emails"
          className="input-label input__checkbox__label"
        >
          Allow to receive emails
        </label>
      </div>
    </div>
  );
};

export default AllowInput;
