import React from "react";
import { NavLink } from "react-router-dom";
const MenuLink = ({ href, ...otherProps }) => {
    const isHttpLink = href?.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Tag = isHttpLink ? "a" : NavLink;
    const props = isHttpLink ? { href } : { to: href };
    return <Tag {...props} {...otherProps}/>;
};
export default MenuLink;
