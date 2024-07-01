import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { THEME_OPTIONS } from "./constants.ts";
import "./MainStyle.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={THEME_OPTIONS}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
