import React, { useState } from "react";
import "./ProfilePage.css";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export interface ICharacter {
  name: string;
  email: string;
  gender: string;
  correctBirthday: string;
  country: string;
  photo: string | Blob;
  allow: string;
  id: number;
}

const ProfilePage: React.FC = function () {
  const [array, setArray] = useState<Array<ICharacter>>([]);

  const handleFormValidation = (
    name: string,
    email: string,
    gender: string,
    correctBirthday: string,
    country: string,
    photo: string | Blob,
    allow: string,
    id: number
  ) => {
    const newCard = {
      name,
      email,
      gender,
      id,
      correctBirthday,
      country,
      photo,
      allow,
    };
    setArray([...array, newCard]);
  };
  return (
    <div className="profilePage-wrapper">
      <ProfileForm
        data-testid="profileForm"
        parentCallback={handleFormValidation}
      />
      {array.map((post, index) => (
        <ProfileCard key={index + 1} createCard={array[index]} />
      ))}
    </div>
  );
};

export default ProfilePage;
