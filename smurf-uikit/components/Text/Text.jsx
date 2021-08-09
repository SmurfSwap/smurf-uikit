import styled from "styled-components";
import { space } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
const getColor = ({ color, theme }) => {
    return getThemeValue(`colors.${color}`, color)(theme);
};
const getFontSize = ({ fontSize, small }) => {
    return small ? "14px" : fontSize || "16px";
};
const Text = styled.div `
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
`;
Text.defaultProps = {
    color: "text",
    small: false,
};
export default Text;
