import styled from "styled-components";
import { Space } from "antd";

export const styleGameBoardContainer = {
  minWidth: "50vw",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styleWinnerText = { fontSize: "60px" };

export const styleConfetti = { width: "100vw" };

export const styleCyrrentPlayerBox: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  left: "10px",
};

export const styleCurrentPlayerText: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  fontSize: "60px",
};

export const StyledSpace = styled(Space)`
  position: absolute;
  left: 10px;
  bottom: 0;
  top: auto;
  font-size: 24px;

  @media (max-width: 768px) {
    bottom: auto;
    top: 10px;
    left: auto;
    right: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const useStyle = (fieldSize: number) => ({
  cell: {
    backgroundColor: "#121212",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
    width: `calc(94px - ${fieldSize * 6}px)`,
    height: `calc(94px - ${fieldSize * 6}px)`,
    fontSize: `calc(80px - ${fieldSize * 6}px)`,
  },
  field: {
    marginTop: "100px",
    width: "auto",
    height: "auto",
    display: "grid",
    gap: "2px",
    backgroundColor: "white",
    gridTemplateColumns: `repeat(${fieldSize}, 1fr)`,
    gridTemplateRows: `repeat(${fieldSize}, 1fr)`,
  },
  nolick: {
    geight: "80px",
    width: `calc(80px - ${fieldSize * 6}px)`,
  },
});
