import GameBoard from "./components/GameBoard/GameBoard";
import Statistics from "./components/Statistics/Statistics";
import ErrorBoundary from "./components/ErrorBoundary";
import { StyledLayout, StyledSpace } from "./AppStyle";

const App = () => {
  return (
    <StyledLayout>
      <ErrorBoundary>
        <StyledSpace>
          <GameBoard />
          <Statistics />
        </StyledSpace>
      </ErrorBoundary>
    </StyledLayout>
  );
};

export default App;
