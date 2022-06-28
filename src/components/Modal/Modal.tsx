import React from "react";
import "./Modal.css";
import ModalInfo from "./ModalInfo/ModalInfo";

interface IProps {
  handleClose: () => void;
  show: boolean;
  name: string;
  gender: string;
  image: string;
  location: string;
  origin: string;
  species: string;
  status: string;
}
const Modal = function (props: IProps) {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const { target } = event;
    if ((target as HTMLButtonElement).className === "modal display-block") {
      props.handleClose();
    }
  };

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  if (showHideClassName === "modal display-block") {
    document.body.style.overflow = "hidden";
  }
  return (
    <div className="parent" onClick={handleClick}>
      <div className={showHideClassName} data-testid="modal">
        <section className="modal-main">
          <a href="#" className="modal__close" onClick={props.handleClose}></a>
          <img className="modal__img" src={props.image} alt="card-img" />
          <ModalInfo
            name={props.name}
            gender={props.gender}
            status={props.status}
            species={props.species}
            location={props.location}
            origin={props.origin}
          />
        </section>
      </div>
    </div>
  );
};

export default Modal;
