import React from "react";
import { Link } from "react-router-dom";

const RouterLink = props => {
  return (
    <>
      <Link to={props.address} className={props.classes}>
        {props.name}
      </Link>
    </>
  );
};

export default RouterLink;
