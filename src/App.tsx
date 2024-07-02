// import { Layout } from "antd";
import GameBoard from "./components/GameBoard/GameBoard";
import Statistics from "./components/Statistics/Statistics";
import { StyledLayout, StyledSpace } from "./AppStyle";

const App = () => {
  return (
    <StyledLayout>
      <StyledSpace>
        <GameBoard />
        <Statistics />
      </StyledSpace>
    </StyledLayout>
  );
};

export default App;
