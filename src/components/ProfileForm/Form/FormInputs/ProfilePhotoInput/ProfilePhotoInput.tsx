import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  handleChange: () => void;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const ProfilePhotoInput = (props: IProps) => {
  const { errors, register, handleChange } = props;
  return (
    <div className="item__wrapper">
      <div className="form__item">
        <div className="input-label">Upload your profile photo</div>
        <div>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            id="profile-photo"
            {...register}
            className="form__input form__input__file"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form__error">{errors?.message}</div>
    </div>
  );
};

export default ProfilePhotoInput;
