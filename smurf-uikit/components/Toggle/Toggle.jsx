import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
const Toggle = ({ checked, ...props }) => {
    const isChecked = !!checked;
    return (<StyledToggle checked={isChecked}>
      <Input checked={checked} {...props} type="checkbox"/>
      <Handle />
    </StyledToggle>);
};
export default Toggle;
