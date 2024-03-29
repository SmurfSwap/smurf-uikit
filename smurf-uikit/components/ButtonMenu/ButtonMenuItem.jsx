import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
const InactiveButton = styled(Button) `
  background-color: transparent;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;
const ButtonMenuItem = ({ isActive = false, size = sizes.MD, variant = variants.PRIMARY, as, ...props }) => {
    if (!isActive) {
        return (<InactiveButton forwardedAs={as} size={size} variant="tertiary" colorKey={variant === variants.PRIMARY ? "primary" : "textSubtle"} {...props}/>);
    }
    return <Button as={as} size={size} variant={variant} {...props}/>;
};
export default ButtonMenuItem;
