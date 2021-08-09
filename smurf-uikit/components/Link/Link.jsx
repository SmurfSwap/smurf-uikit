import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
const StyledLink = styled(Text) `
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;
const Link = ({ external, ...props }) => {
    const internalProps = external ? getExternalLinkProps() : {};
    return <StyledLink as="a" bold {...internalProps} {...props}/>;
};
Link.defaultProps = {
    color: "primary",
};
export default Link;
