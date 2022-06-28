import React from "react";
import "./ProfileCard.css";
import { ICharacter } from "../../pages/ProfilePage/ProfilePage";
import ProfileCardInfo from "./ProfileCardInfo/ProfileCardInfo";

interface IProps {
  createCard: ICharacter;
}

const ProfileCard = function (props: IProps) {
  return (
    <div className="profileCard-wrapper" data-testid="profileCard">
      <ProfileCardInfo
        name={props.createCard.name}
        email={props.createCard.email}
        gender={props.createCard.gender}
        correctBirthday={props.createCard.correctBirthday}
        country={props.createCard.country}
        allow={props.createCard.allow}
      />
      <img
        className=""
        src={URL.createObjectURL(new Blob([props.createCard.photo]))}
        width="200"
        height="200"
        alt="Image"
      />
    </div>
  );
};

export default ProfileCard;
