import { useEffect, useState } from "react";
import useGameStore from "../../store/gameStore";
import Confetti from "react-confetti";
import { Button, Space, Typography } from "antd";
import {
  GAME_STATE_KEYS,
  SHOW_CONFETTI_MILISECONSD,
  GAME_IMAGES,
} from "../../constants";
import {
  styleCell,
  styleField,
  styleGameBoardContainer,
  styleNolick,
  styleWinnerText,
  styleConfetti,
  styleCyrrentPlayerBox,
  styleCurrentPlayerText,
} from "./style";

const GameBoard = () => {
  const [isShowConfetti, setIsShowConfetti] = useState<boolean>(false);
  const {
    board,
    currentPlayer,
    handleClick,
    resetGame,
    isGameStarted,
    winner,
  } = useGameStore();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (winner) {
      setIsShowConfetti(true);
      timer = setTimeout(() => {
        setIsShowConfetti(false);
      }, SHOW_CONFETTI_MILISECONSD);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [winner]);

  const detectСurrentPlayer = (cell: string | null): React.ReactNode => {
    return cell === GAME_STATE_KEYS.PLAYER_1 ? (
      GAME_STATE_KEYS.PLAYER_1
    ) : cell === GAME_STATE_KEYS.PLAYER_2 ? (
      <img
        style={styleNolick}
        src={GAME_IMAGES.nolick.src}
        alt={GAME_IMAGES.nolick.alt}
      />
    ) : null;
  };

  return (
    <Space style={styleGameBoardContainer} direction="vertical" align="center">
      <Space>
        {winner ? (
          winner === "tie" ? (
            <Space direction="vertical">
              <Typography>ничья </Typography>
              <img
                style={{ width: "200px" }}
                src={GAME_IMAGES.grusni.src}
                alt={GAME_IMAGES.grusni.alt}
              />
            </Space>
          ) : (
            <>
              <Typography>победил игрок: </Typography>
              <Typography style={styleWinnerText}>
                {detectСurrentPlayer(winner)}
              </Typography>
              {isShowConfetti && (
                <Confetti
                  style={styleConfetti}
                  gravity={0.2}
                  numberOfPieces={300}
                />
              )}
            </>
          )
        ) : (
          <>
            <Space style={styleCyrrentPlayerBox}>
              <Typography>Текущий игрок: </Typography>
              <Typography style={styleCurrentPlayerText}>
                {detectСurrentPlayer(currentPlayer)}
              </Typography>
            </Space>
            <Space style={styleField}>
              {board.map((cell, index) => (
                <div
                  key={index}
                  style={styleCell}
                  onClick={() => handleClick(index)}
                >
                  {detectСurrentPlayer(cell)}
                </div>
              ))}
            </Space>
          </>
        )}
      </Space>
      {isGameStarted ? (
        <Button onClick={resetGame}>Сбросить игру</Button>
      ) : (
        <Typography>Нажми на ячейку чтобы начать игру (^人^)</Typography>
      )}
    </Space>
  );
};

export default GameBoard;
