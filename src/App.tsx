import { Space, Layout } from "antd";
import GameBoard from "./components/GameBoard/GameBoard";
import Statistics from "./components/Statistics/Statistics";
import { styleLayout } from "./AppStyle";

const App = () => {
  return (
    <Layout style={styleLayout}>
      <Space direction="horizontal">
        <GameBoard />
        <Statistics />
      </Space>
    </Layout>
  );
};

export default App;
