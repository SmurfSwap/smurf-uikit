import React, { cloneElement, Children } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { sizes, variants } from "../Button/types";
const ButtonMenu = ({ activeIndex = 0, size = sizes.MD, variant = variants.PRIMARY, onClick, children, }) => {
    return (<StyledButtonMenu variant={variant}>
      {Children.map(children, (child, index) => {
            return cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onClick ? () => onClick(index) : undefined,
                size,
                variant,
            });
        })}
    </StyledButtonMenu>);
};
export default ButtonMenu;
