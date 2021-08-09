import styled from "styled-components";
import { space } from "styled-system";
const CardHeader = styled.div `
  background: ${({ theme }) => theme.card.cardHeaderBackground};

  ${space}
`;
CardHeader.defaultProps = {
    p: "24px",
};
export default CardHeader;
