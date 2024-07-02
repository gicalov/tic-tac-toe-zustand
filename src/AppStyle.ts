import styled from "styled-components";
import { Space, Layout } from "antd";

export const StyledLayout = styled(Layout)`
  height: 100vh;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
