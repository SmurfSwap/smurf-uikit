import React from "react";
import styled from "styled-components";
const getLeft = ({ position }) => {
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
const getBottom = ({ position }) => {
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
const DropdownContent = styled.div `
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  left: ${getLeft};
  bottom: ${getBottom};
  background-color: ${({ theme }) => theme.nav.background};
  box-shadow: ${({ theme }) => theme.shadows.level1};
  padding: 16px;
  max-height: 500px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: ${({ theme }) => theme.radii.small};
`;
const Container = styled.div `
  position: relative;
  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    display: flex;
  }
`;
const Dropdown = ({ target, position = "bottom", children }) => {
    return (<Container>
      {target}
      <DropdownContent position={position}>{children}</DropdownContent>
    </Container>);
};
Dropdown.defaultProps = {
    position: "bottom",
};
export default Dropdown;
