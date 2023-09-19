import { useState } from "react";
import { GameGrid } from "../models/GameGrid";

const gameGrid = new GameGrid([3, 3]);

export const Grid = () => {
  const [turn, setTurn] = useState(0);
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState<string | null>(null);

  const handleGridClick = (x: number, y: number) => {
    const wasUpdated = gameGrid.updateGrid(x, y, player);
    if (wasUpdated) {
      setPlayer(player === "x" ? "o" : "x");
      const possibleWinner = gameGrid.checkWinCon();
      setWinner(possibleWinner);
      setTurn(turn + 1);
      console.log(turn);
    }
  };

  const handleReset = () => {
    setPlayer("x");
    setTurn(0);
    setWinner(null);
    gameGrid.resetGrid();
  };

  return (
    <>
      {winner && (
        <div className="text-white text-lg">
          Winner is : <span className="text-teal-300 uppercase">{winner}</span>
        </div>
      )}
      {turn === 9 && !winner && <div className="text-white text-lg">Draw</div>}
      <div className="flex flex-wrap w-32">
        {gameGrid.grid.map((row, x) => (
          <>
            {row.map((col, y) => (
              <div
                className="border-slate-400 border-2 w-10 h-10 flex justify-center items-center text-white hover:bg-gray-600 ease-in-out duration-300"
                onClick={() => handleGridClick(x, y)}
              >
                {col}
              </div>
            ))}
          </>
        ))}
      </div>
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-10"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
};
