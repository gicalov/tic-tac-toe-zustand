import styled from "styled-components";
import { Space } from "antd";

export const styleCell = {
  width: "94px",
  height: "94px",
  backgroundColor: "#121212",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "60px",
  color: "white",
  cursor: "pointer",
};

export const styleField = {
  marginTop: "100px",
  width: "auto",
  height: "auto",
  display: "grid",
  gap: "2px",
  backgroundColor: "white",
};

export const styleGameBoardContainer = {
  minWidth: "50vw",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styleNolick = { width: "80px", geight: "80px" };

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
