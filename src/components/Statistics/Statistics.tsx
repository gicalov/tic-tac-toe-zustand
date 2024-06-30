import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { CategoryScale, LinearScale, Chart } from "chart.js";
import "chart.js/auto";
import useGameStore from "../../store/gameStore";
import { styleStatisticsBox, stylePie, styleBar } from "./style";

const Statistics = () => {
  const { wins, resetStats } = useGameStore();

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale);
  }, []);

  const barData = {
    labels: ["✖", "◯", "ничьи"],
    datasets: [
      {
        label: "Победы",
        data: [wins.X, wins.O, wins.ties],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const pieData = {
    datasets: [
      {
        data: [wins.X, wins.O, wins.ties],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
    labels: ["✖", "◯", "ничьи"],
  };

  return (
    <div>
      <div>Статистика игр:</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={stylePie}>
          <Pie data={pieData} />
        </div>
        <div
          style={{ width: "100%", height: "5px", backgroundColor: "black" }}
        />
        <div style={styleBar}>
          <Bar data={barData} />
        </div>
        <button onClick={resetStats}>Сбросить статистику</button>
      </div>
    </div>
  );
};

export default Statistics;
