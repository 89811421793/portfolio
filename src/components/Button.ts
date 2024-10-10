import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  border: 1px solid ${theme.colors.accent};
  width: 148px;
  height: 37px;
  padding: 8px, 16px, 8px, 16px;

  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
`;
