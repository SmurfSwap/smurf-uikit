import styled from "styled-components";
import { space } from "styled-system";
const CardBody = styled.div `
  ${space}
`;
CardBody.defaultProps = {
    p: "24px",
};
export default CardBody;
