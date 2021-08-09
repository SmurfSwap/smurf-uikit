import React from "react";
import { Link } from "react-router-dom";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { Button } from "../../components/Button";
const ToastAction = ({ action }) => {
    if (action.url.startsWith("http")) {
        return (<Button as="a" size="sm" href={action.url} {...getExternalLinkProps()}>
        {action.text}
      </Button>);
    }
    return (<Button as={Link} size="sm" to={action.url}>
      {action.text}
    </Button>);
};
export default ToastAction;
