/* eslint-disable react/no-array-index-key */
import React, { Children, isValidElement } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import ChevronRightIcon from "../Svg/Icons/ChevronRight";
const Separator = styled.div `
  align-items: center;
  color: currentColor;
  display: flex;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 8px;
    padding-right: 8px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const StyledBreadcrumbs = styled.ul `
  align-items: center;
  color: ${({ theme }) => theme.colors.textDisabled};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;

  ${space}
`;
const insertSeparators = (items, separator) => items.reduce((accum, item, index) => {
    if (index === 0) {
        return [...accum, item];
    }
    return [
        ...accum,
        <Separator aria-hidden key={`seperator-${index}`}>
        {separator}
      </Separator>,
        item,
    ];
}, []);
const DefaultSeparator = <ChevronRightIcon color="currentColor" width="24px"/>;
const Breadcrumbs = ({ separator = DefaultSeparator, children }) => {
    const validItems = Children.toArray(children).filter((child) => isValidElement(child));
    const items = insertSeparators(validItems, separator);
    return (<StyledBreadcrumbs>
      {items.map((item, index) => (<li key={`child-${index}`}>{item}</li>))}
    </StyledBreadcrumbs>);
};
export default Breadcrumbs;
