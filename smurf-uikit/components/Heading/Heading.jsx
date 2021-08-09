import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes } from "./types";
const style = {
    [sizes.MD]: {
        fontSize: "20px",
    },
    [sizes.LG]: {
        fontSize: "24px",
    },
    [sizes.XL]: {
        fontSize: "40px",
    },
    [sizes.XXL]: {
        fontSize: "64px",
    },
};
const Heading = styled(Text).attrs({ bold: true }) `
  ${({ size }) => style[size || sizes.MD]}
  font-weight:600;
  line-height: 1.1;
`;
Heading.defaultProps = {
    as: tags.H2,
};
export default Heading;
