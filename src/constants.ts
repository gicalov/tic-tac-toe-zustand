import { IWins } from "./components/Statistics/interfaces";

export const THEME_OPTIONS = {
  token: {
    colorPrimary: "#00b96b",
    borderRadius: 2,
    colorBgContainer: "#1f1f1f",
    colorText: "#fff",
    colorBgLayout: "#121212",
  },
};

export const barData = (wins: IWins) => ({
  labels: ["✖", "◯", "ничьи"],
  datasets: [
    {
      label: "Победы",
      data: [wins.X, wins.O, wins.ties],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
});

export const pieData = (wins: IWins) => ({
  datasets: [
    {
      data: [wins.X, wins.O, wins.ties],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
    },
  ],
  labels: ["✖", "◯", "ничьи"],
});

export const options = (isPie: boolean) => ({
  plugins: {
    legend: {
      labels: {
        color: "#fff",
      },
    },
    title: {
      display: true,
      text: isPie ? "Круговая диаграмма" : "Статистическая таблица",
      color: "#fff",
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#fff",
        stepSize: 1,
      },
    },
    y: {
      ticks: {
        color: "#fff",
        stepSize: 1,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

export const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export enum GAME_STATE_KEYS {
  PLAYER_1 = "✟",
  PLAYER_2 = "◯",
  TIE = "tie",
}

export const SHOW_CONFETTI_MILISECONSD = 3000;

export const GAME_IMAGES = {
  nolick: { src: "./src/assets/3F3F%3F.webp", alt: "нолик" },
  grusni: { src: "./src/assets/sad.jpg", alt: "печаль" },
};
