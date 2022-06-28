import React from "react";

interface IProps {
  name: string;
  email: string;
  gender: string;
  correctBirthday: string;
  country: string;
  allow: string;
}

const ProfileCardInfo = function (props: IProps) {
  return (
    <div>
      <div className="profileCard__item">
        Name:
        <div className="profileCard__item__property">{props.name}</div>
      </div>
      <div className="profileCard__item">
        Email:
        <div className="profileCard__item__property">{props.email}</div>
      </div>
      <div className="profileCard__item">
        Gender:
        <div className="profileCard__item__property">{props.gender}</div>
      </div>
      <div className="profileCard__item">
        Date of birth:
        <div className="profileCard__item__property">
          {props.correctBirthday}
        </div>
      </div>
      <div className="profileCard__item">
        Country:
        <div className="profileCard__item__property">{props.country}</div>
      </div>
      <div className="profileCard__item">
        Allow:
        <div className="profileCard__item__property">{props.allow}</div>
      </div>
    </div>
  );
};

export default ProfileCardInfo;
