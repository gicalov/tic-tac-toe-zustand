import { useEffect, useState } from "react";
import { Button, Space, Typography, InputNumber } from "antd";
import Confetti from "react-confetti";
import useGameStore from "../../store/gameStore";
import checkRange from "./../../helpers/checkRange";
import {
  GAME_STATE_KEYS,
  SHOW_CONFETTI_MILISECONSD,
  GAME_IMAGES,
} from "../../constants";
import {
  StyledSpace,
  styleGameBoardContainer,
  styleWinnerText,
  styleConfetti,
  styleCyrrentPlayerBox,
  styleCurrentPlayerText,
  useStyle,
} from "./style";

const GameBoard = () => {
  const {
    board,
    currentPlayer,
    handleClick,
    resetGame,
    isGameStarted,
    winner,
    handleChangeFieldSize,
    boardSize,
  } = useGameStore();
  const [isShowConfetti, setIsShowConfetti] = useState<boolean>(false);
  const [fieldSize, setFieldSize] = useState<number>(boardSize);

  const styles = useStyle(fieldSize);

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
        style={styles.nolick}
        src={GAME_IMAGES.nolick.src}
        alt={GAME_IMAGES.nolick.alt}
      />
    ) : null;
  };

  const handleChangeField = (size: number) => {
    if (checkRange(size)) {
      setFieldSize(size);

      if (size) handleChangeFieldSize(size);
    }
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
            <Space style={styles.field}>
              {board.map((cell, index) => (
                <div
                  key={index}
                  style={styles.cell}
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
        <>
          <Typography>Нажми на ячейку чтобы начать игру (^人^)</Typography>
          <StyledSpace>
            <Typography>Введите колличество игровых ячеек</Typography>
            <InputNumber
              onChange={(num) => handleChangeField(num as number)}
              value={fieldSize ? Number(fieldSize) : undefined}
              min={1}
              max={10}
            />
          </StyledSpace>
        </>
      )}
    </Space>
  );
};

export default GameBoard;
