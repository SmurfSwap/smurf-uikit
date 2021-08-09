import styled from "styled-components";
import { variants } from "../Button/types";
const getBackgroundColor = ({ theme, variant }) => {
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
const StyledButtonMenu = styled.div `
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;
export default StyledButtonMenu;
