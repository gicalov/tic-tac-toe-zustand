import styled from "styled-components";
import { Space, Layout } from "antd";

export const StyledLayout = styled(Layout)`
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
    min-height: 100vh;
  }
`;

export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
