import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardImages from "./Card.json";
import Popup from "./Popup";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCards, SetSelectedCards] = useState([]);
  const [gameFinish, setGameFinish] = useState(false);

  const suffleCards = () => {
    const suffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(suffledCards);
    setTurns(0);
    setScore(0);
  };

  const handleCardSelection = (card) => {
    SetSelectedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (selectedCards.length > 1) {
      const [firstSelection, secondSelection] = selectedCards;
      if (firstSelection.src === secondSelection.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstSelection.src) {
              setScore(score + 100);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetCards();
      } else {
        setTimeout(() => resetCards(), 1000);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    suffleCards();
  }, []);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setGameFinish(true);
    }
  }, [cards]);

  const resetCards = () => {
    SetSelectedCards([]);
    setTurns((prevTurn) => prevTurn + 1);
    setScore((prevScore) => prevScore - 50);
  };

  const togglePopup = () => {
    setGameFinish(false);
    suffleCards();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Match the picture to correct rock type.</h2>
        <div className="header">
          {/* <p>Turns : {turns}</p>
          <p>Score : {score}</p> */}
          <button onClick={suffleCards}>New Game</button>
        </div>

        <div className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleCardSelection={handleCardSelection}
              flipped={selectedCards.includes(card) || card.matched}
            />
          ))}
        </div>

        {gameFinish && (
          <Popup handleClose={togglePopup} score={score} turns={turns} />
        )}
      </div>
    </div>
  );
};

export default App;
