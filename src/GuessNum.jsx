import React, { useState } from "react";

function GuessNum() {
  const [guess, setGuess] = useState();
  const random = Math.floor(Math.random() * 10) + 1;

  const handleGuess = () => {
    if (guess <= 0 || guess > 10) {
      alert("Invalid number!");
    } else if (guess > random) {
      alert("Number is greater.", random);
    } else if (guess < random) {
      alert("Number is smaller.", random);
      return;
    } else if (guess === random) {
      alert("You got it!");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(parseInt(e.target.value))}
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
}

export default GuessNum;
