import React from "react";

const Heading1 = props => {
  return (
    <>
      <p key={props.key} className={props.classes}>
        {props.name}
      </p>
    </>
  );
};

export default Heading1;
