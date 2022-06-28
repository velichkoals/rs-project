import React, { useEffect, useState } from "react";

import NameInput from "./FormInputs/NameInput/NameInput";
import EmailInput from "./FormInputs/EmailInput/EmailInput";
import GenderInput from "./FormInputs/GenderInput/GenderInput";
import DateInput from "./FormInputs/DateInput/DateInput";
import CountryInput from "./FormInputs/CountryInput/CountryInput";
import ProfilePhotoInput from "./FormInputs/ProfilePhotoInput/ProfilePhotoInput";
import AllowInput from "./FormInputs/AllowInput/AllowInput";
import FormButton from "./FormButton/FormButton";
import { useForm } from "react-hook-form";
import { IProps } from "../ProfileForm";

const Form = (props: IProps) => {
  const { parentCallback } = props;

  const handleChange = () => {
    setSubmitting(false);
    setSuccess("");
  };
  const [success, setSuccess] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      userGender: "",
      userBirthday: "",
      userCountry: "",
      userPhoto: "",
      userAllow: false,
    },
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          setSubmitting(true);
          setSuccess("Your profile successfully created!");

          let allowAnswer;
          const id = Date.now();
          const file = data.userPhoto[0];
          const correctBirthday = data.userBirthday.replace(
            /(\d*).(\d*).(\d*)/,
            "$3.$2.$1"
          );

          if (data.userAllow) {
            allowAnswer = "Yes";
          } else {
            allowAnswer = "No";
          }
          parentCallback(
            data.userName,
            data.userEmail,
            data.userGender,
            correctBirthday,
            data.userCountry,
            file,
            allowAnswer,
            id
          );
        })}
      >
        <NameInput
          handleChange={handleChange}
          register={register("userName", {
            required: "This filed is required.",
            minLength: { value: 2, message: "Min length is 2" },
          })}
          errors={errors.userName}
        />
        <EmailInput
          handleChange={handleChange}
          errors={errors.userEmail}
          register={register("userEmail", {
            required: "This filed is required.",
            minLength: { value: 5, message: "Min length is 5" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        <GenderInput
          handleChange={handleChange}
          errors={errors.userGender}
          register={register("userGender", {
            required: "This filed is required.",
          })}
        />
        <DateInput
          handleChange={handleChange}
          errors={errors.userBirthday}
          register={register("userBirthday", {
            required: "This filed is required.",
          })}
        />
        <CountryInput
          handleChange={handleChange}
          errors={errors.userCountry}
          register={register("userCountry", {
            required: "This filed is required.",
          })}
        />
        <ProfilePhotoInput
          handleChange={handleChange}
          errors={errors.userPhoto}
          register={register("userPhoto", {
            required: "This filed is required.",
          })}
        />
        <AllowInput
          handleChange={handleChange}
          register={register("userAllow", {
            required: false,
          })}
        />
        <FormButton disabled={submitting} />
      </form>
      <div className="form__success">{success}</div>
    </div>
  );
};

export default Form;
