import React from "react";
import StyledCard from "./StyledCard";
const Card = ({ ribbon, children, ...props }) => {
    return (<StyledCard {...props}>
      {ribbon}
      {children}
    </StyledCard>);
};
export default Card;
