import React from "react";
import Card from "../Card/Card";
import { ICharacter } from "../../pages/HomePage/HomePage";

interface IProps {
  data: Array<ICharacter>;
  isLoaded: boolean;
  cardOnClick: (cardId: number) => void;
}

const CardWrapper = function (props: IProps) {
  return (
    <div>
      {!props.isLoaded ? (
        <div className="loader"></div>
      ) : (
        <div className="card-wrapper">
          {props.data.map((card, item) => {
            return (
              <Card
                data-testid="card"
                handleOpen={props.cardOnClick}
                key={card.id}
                id={item}
                name={card.name}
                image={card.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardWrapper;
