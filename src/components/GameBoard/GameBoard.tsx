import { useEffect, useState } from "react";
import useGameStore from "../../store/gameStore";
import Confetti from "react-confetti";
import {
  styleCell,
  styleField,
  styleGameBoardContainer,
  styleNolick,
} from "./style";
import nolick from "../../assets/3F3F%3F.webp";

const GameBoard = () => {
  const [isShowConfetti, setIsShowConfetti] = useState<boolean>(false);
  const { board, currentPlayer, handleClick, resetGame, winner } =
    useGameStore();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (winner) {
      setIsShowConfetti(true);
      timer = setTimeout(() => {
        setIsShowConfetti(false);
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [winner]);

  const detectСurrentЗlayer = (cell: string | null): React.ReactNode => {
    return cell === "✟" ? (
      "✟"
    ) : cell === "◯" ? (
      <img style={styleNolick} src={nolick} />
    ) : null;
  };

  return (
    <div style={styleGameBoardContainer}>
      <div>
        {winner ? (
          <>
            <div>победил игрок: </div>
            <div style={{ fontSize: "60px" }}>
              {detectСurrentЗlayer(winner)}
            </div>
            {isShowConfetti && (
              <Confetti
                style={{ width: "100vw" }}
                gravity={10}
                numberOfPieces={10000}
                // drawShape={(ctx) => {
                //   ctx.beginPath();
                //   for (let i = 0; i < 10; i++) {
                //     const angle = (Math.PI * 2 * i) / 10;
                //     const x = (0.2 + 1.2 * angle) * Math.cos(angle);
                //     const y = (0.2 + 1.2 * angle) * Math.sin(angle);
                //     ctx.lineTo(x, y);
                //   }
                //   ctx.lineTo(0, 0);
                //   ctx.fill();
                //   ctx.closePath();
                // }}
              />
            )}
          </>
        ) : (
          <>
            <div style={{ position: "absolute", top: "10px" }}>
              <div>Текущий игрок: </div>
              <div style={{ fontSize: "60px" }}>
                {detectСurrentЗlayer(currentPlayer)}
              </div>
            </div>
            <div style={styleField}>
              {board.map((cell, index) => (
                <div
                  key={index}
                  style={styleCell}
                  onClick={() => handleClick(index)}
                >
                  {detectСurrentЗlayer(cell)}
                </div>
              ))}
            </div>
          </>
        )}
        <button style={{ height: "100px" }} onClick={resetGame}>
          Сбросить игру
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
