import React from "react";
import "./Card.css";

interface IProps {
  image: string;
  name: string;
  id: number;
  handleOpen: (cardId: number) => void;
}

const Card = function (props: IProps) {
  return (
    <div>
      <div
        onClick={() => props.handleOpen(props.id)}
        className="card__item"
        data-testid="card__item"
      >
        <img className="card__img" src={props.image} alt="card-img" />
        <div className="card__info">
          <div className="card__text">
            <div className="card__title">{props.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
