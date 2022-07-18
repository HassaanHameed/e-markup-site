import React from "react";

const Input = props => {
  return (
    <>
      <input
        value={props.value}
        onChange={props.onChange}
        className={props.classes}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
