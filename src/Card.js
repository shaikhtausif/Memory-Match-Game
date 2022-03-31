import React from "react";
import "./Card.css";

const Card = ({ card, handleCardSelection, flipped }) => {
  const handleClick = () => {
    handleCardSelection(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/normal.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
