import React from "react";

const Popup = ({ handleClose, score, turns }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          X
        </span>
        <h2>Congratulations you have won the game!!</h2>
          <h4>You Scored = {score}</h4>
          <h4>Total Turns = {turns}</h4>
      </div>
    </div>
  );
};

export default Popup;
