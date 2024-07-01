import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { CategoryScale, LinearScale, Chart } from "chart.js";
import { Button, Space, Typography } from "antd";
import useGameStore from "../../store/gameStore";
import { pieData, barData, options } from "../../constants";
import { styleBar, styleStatisticsContainer, stylePie } from "./style";

const Statistics = () => {
  const { wins, resetStats } = useGameStore();

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale);
  }, []);

  return (
    <Space style={styleStatisticsContainer}>
      <Space direction="vertical">
        <Typography>Статистика игр:</Typography>
        <Space direction="vertical" align="center">
          <Space align="center">
            <Pie
              data={pieData(wins)}
              options={options(true)}
              style={stylePie}
            />
          </Space>
          <Space style={styleBar}>
            <Bar data={barData(wins)} options={options(false)} />
          </Space>
          <Button onClick={resetStats}>Сбросить статистику</Button>
        </Space>
      </Space>
    </Space>
  );
};

export default Statistics;
