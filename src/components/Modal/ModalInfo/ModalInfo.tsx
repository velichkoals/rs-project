import React from "react";

interface IProps {
  name: string;
  gender: string;
  location: string;
  origin: string;
  species: string;
  status: string;
}

const ModalInfo = function (props: IProps) {
  return (
    <div className="info-wrapper">
      <div className="modal__info">
        <span className="modal__info__title">Name:</span>
        {props.name}
      </div>
      <div className="modal__info">
        <span className="modal__info__title">Gender:</span>
        {props.gender}
      </div>
      <div className="modal__info">
        <span className="modal__info__title">Status:</span>
        {props.status}
      </div>
      <div className="modal__info">
        <span className="modal__info__title">Species:</span>
        {props.species}
      </div>
      <div className="modal__info">
        <span className="modal__info__title">Location:</span>
        {props.location}
      </div>
      <div className="modal__info">
        <span className="modal__info__title">Origin:</span>
        {props.origin}
      </div>
    </div>
  );
};

export default ModalInfo;
