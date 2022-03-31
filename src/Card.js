import React, { useState } from "react";
import "./Card.css";

const Card = ({ card, handleCardSelection, flipped }) => {
  const [cardImage, setCardImage] = useState("/img/normal.png");

  const handleClick = () => {
    handleCardSelection(card);
  };
  const handleOnMouseOver = () => {
    setCardImage("/img/hover.png");
  };

  const handleOnMouseOut = () => {
    setCardImage("/img/normal.png");
  };

  return (
    <div
      className="card"
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={cardImage}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
