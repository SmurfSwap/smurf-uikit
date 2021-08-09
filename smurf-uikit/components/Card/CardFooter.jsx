import styled from "styled-components";
import { space } from "styled-system";
const CardFooter = styled.div `
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  ${space}
`;
CardFooter.defaultProps = {
    p: "24px",
};
export default CardFooter;
