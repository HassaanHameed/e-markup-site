import React from "react";

const Input = props => {
  return (
    <>
      <input
        className={props.classes}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
