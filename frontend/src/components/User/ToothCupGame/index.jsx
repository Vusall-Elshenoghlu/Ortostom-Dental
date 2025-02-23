import React, { useState, useEffect } from "react";
import "./ToothCupGame.css";

const ToothCupGame = () => {
  const [cups, setCups] = useState([false, true, false]); 
  const [shuffling, setShuffling] = useState(false);
  const [message, setMessage] = useState("Tapmağa hazır olun!");
  const [showTooth, setShowTooth] = useState(true);
  const [positions, setPositions] = useState([0, 1, 2]);
  const [combo, setCombo] = useState(1);

  useEffect(() => {
    setTimeout(() => setShowTooth(false), 1500);
  }, []);

  const shuffleCups = () => {
    setMessage("Qarışdırılır...");
    setShuffling(true);

    let newPositions = [...positions];
    const shuffleTimes = Math.min(3 + Math.floor(combo / 2), 15);

    for (let i = 0; i < shuffleTimes; i++) {
      const index1 = Math.floor(Math.random() * 3);
      let index2 = Math.floor(Math.random() * 3);
      while (index1 === index2) {
        index2 = Math.floor(Math.random() * 3);
      }
      [newPositions[index1], newPositions[index2]] = [newPositions[index2], newPositions[index1]];
    }

    setTimeout(() => {
      setPositions(newPositions); 
      setShuffling(false);
      setMessage("Diş hansı stəkandadır?");
    }, 1000 + shuffleTimes * 200);
  };
  const handleGuess = (index) => {
    if (shuffling) return;

    if (cups[index]) {
      setMessage("Düz tapdın! 🎉");
      setCombo(combo + 1);
    } else {
      setMessage("Yanlış! 😢 Bir daha cəhd et.");
      setCombo(1);
    }
  };

  return (
    <div className="game-container">
      <h2>{message}</h2>
      <div className="cup-container">
        {positions.map((pos, index) => (
          <div
            key={index}
            className={`cup ${shuffling ? "shuffling" : ""}`}
            style={{ transform: `translateX(${pos * 100 - 100}px)` }}
            onClick={() => handleGuess(index)}
          >
            <div className="cup-shape"></div>
            {cups[index] && (showTooth || message.includes("Düz tapdın")) ? (
              <div className="tooth">🦷</div>
            ) : null}
          </div>
        ))}
      </div>
      <button onClick={shuffleCups} className="start-button">Start</button>
      <p>Combo: {combo}</p>
    </div>
  );
};

export default ToothCupGame;
