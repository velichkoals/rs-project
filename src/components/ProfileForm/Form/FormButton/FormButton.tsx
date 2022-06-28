import React from "react";

interface IProps {
  disabled: boolean;
}

const FormButton = (props: IProps) => {
  const { disabled } = props;
  return (
    <div className="form__item form__item__button-wrapper">
      <input
        className="form__item__button"
        type="submit"
        value="Create profile"
        disabled={disabled}
      />
    </div>
  );
};

export default FormButton;
