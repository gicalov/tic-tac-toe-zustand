import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <GameBoard />
      </div>
      <div>
        <Statistics />
      </div>
    </div>
  );
};

export default App;
