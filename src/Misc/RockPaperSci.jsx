export function RockPaperSci() {
  let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0,
  };

  const generateCompMove = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);

    if (random === 1) return "Rock";
    if (random === 2) return "Paper";
    return "Scissor";
    // return ["Rock", "Paper", "Scissor"][random]; // shorthand
  };

  const handleMove = (userMove) => {
    let compMove = generateCompMove();
    let result;

    if (compMove === userMove) {
      result = "Tie";
      score.ties += 1;
    } else if (
      (compMove === "Paper" && userMove === "Rock") ||
      (compMove === "Rock" && userMove === "Scissor") ||
      (compMove === "Scissor" && userMove === "Paper")
    ) {
      result = "You Lose";
      score.loses += 1;
    } else {
      result = "You Win";
      score.wins += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));
    alert(`You ${userMove} & Computer ${compMove}, ${result}
Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`);
  };

  const handleReset = () => {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    alert("Scores have been reset!");
  };

  return (
    <div className="flex gap-5 items-center justify-center text-6xl">
      <button onClick={() => handleMove("Rock")} className="w-24 h-24 p-2 rounded-full border-2 border-slate-300 flex items-center justify-center">
      ✊
      </button>
      <button onClick={() => handleMove("Paper")} className="w-24 h-24 p-2 rounded-full border-2 border-slate-300 flex items-center justify-center">
      🖐️
      </button>
      <button onClick={() => handleMove("Scissor")} className="w-24 h-24 p-2 rounded-full border-2 border-slate-300 flex items-center justify-center">
      ✌️
      </button>
      <button onClick={handleReset} className="w-24 h-24 p-2 rounded-full border-2 border-slate-300 flex items-center justify-center text-[#FFC83D]">
      ⟳
      </button>
    </div>
  );
}
