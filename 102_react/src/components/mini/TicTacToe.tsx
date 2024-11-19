import { useState } from "react";

function TicTacToe() {
  const [isX, setIsX] = useState(false);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [winner, setWinner] = useState<string | null>(null);
  const currentMoves = history[history.length - 1];
  const jumpTo = (jumpIndex: number) => {
    setHistory(history.slice(0, jumpIndex));
  };
  const handleClick = (index: number) => {
    const newMove = history[history.length - 1].slice(0);
    if (checkWinner(newMove)) {
      return;
    }
    if (isX) {
      newMove[index] = "X";
      setIsX(false);
    } else {
      newMove[index] = "O";
      setIsX(true);
    }
    setHistory([...history, newMove]);
    const winner = checkWinner(newMove);
    console.log(winner);
    if (winner) {
      setWinner(winner);
      return;
    }
  };
  return (
    <div className="">
      <p>{winner ? <span>Winner is {winner}</span> : null}</p>
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {currentMoves.map((item, idx) => {
          return (
            <button
              onClick={() => handleClick(idx)}
              className="border text-black border-black rounded-sm h-8 w-8"
              key={idx + "atictacao"}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
export default TicTacToe;

// basically data is newMove = string[][]

const checkWinner = (strArr: (string | null)[]) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (strArr[a] && strArr[a] === strArr[b] && strArr[b] === strArr[c]) {
      return strArr[a];
    }
  }
};
