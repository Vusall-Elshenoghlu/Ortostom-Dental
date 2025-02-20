import React, { useState, useEffect } from "react";
import "./ToothCupGame.css";

const ToothCupGame = () => {
  const [cups, setCups] = useState([false, true, false]); // Diş ortadadır
  const [shuffling, setShuffling] = useState(false);
  const [message, setMessage] = useState("Tapmağa hazır olun!");
  const [showTooth, setShowTooth] = useState(true);
  const [positions, setPositions] = useState([0, 1, 2]);
  const [combo, setCombo] = useState(1);

  // Dişi gizlətmək üçün useEffect
  useEffect(() => {
    setTimeout(() => setShowTooth(false), 1500); // Oyunun əvvəlində dişi göstər və sonra gizlət
  }, []);

  // Stəkanları qarışdıran funksiya
  const shuffleCups = () => {
    setMessage("Qarışdırılır...");
    setShuffling(true);

    let newPositions = [...positions];
    const shuffleTimes = Math.min(2 + combo, 5); // Combo artdıqca qarışdırma sayı artır, amma max 5 olsun
    for (let i = 0; i < shuffleTimes; i++) {
      const index1 = Math.floor(Math.random() * 3);
      let index2 = Math.floor(Math.random() * 3);
      while (index1 === index2) {
        index2 = Math.floor(Math.random() * 3);
      }
      [newPositions[index1], newPositions[index2]] = [newPositions[index2], newPositions[index1]];
    }

    // Dişi yeni mövqeyə uyğun yerləşdiririk
    const toothPosition = Math.floor(Math.random() * 3); // Dişi təsadüfi bir stəkanda yerləşdiririk
    let newCups = [false, false, false];
    newCups[toothPosition] = true;

    setTimeout(() => {
      setCups(newCups);
      setPositions(newPositions);
      setShuffling(false);
      setMessage("Diş hansı stəkandadır?");
    }, 2000 + shuffleTimes * 200); // Qarışdırma sonrası gözləmə müddəti
  };

  // İstifadəçinin seçimi
  const handleGuess = (index) => {
    if (shuffling) return; // Əgər stəkanlar qarışdırılırsa, hərəkət etmə

    if (cups[index]) {
      setMessage("Düz tapdın! 🎉");
      setCombo(combo + 1); // Düzgün tapıldıqda kombonun sayını artır
    } else {
      setMessage("Yanlış! 😢 Bir daha cəhd et.");
      setCombo(1); // Yanlış olduğunda kombonu sıfırla
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
              <div className="tooth">🦷</div> // Dişi göstər
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
