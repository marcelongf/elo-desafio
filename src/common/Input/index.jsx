import React from "react";

const Input = ({ input, type, text, className, id, ...others }) => {
  return (
    <div className="form-group" >
      {text && <label htmlFor={id}>{text}</label>}
      <input
        type={type}
        {...input}
        id={id}
        className="form-control input-sm"
        {...others}
      />
    </div>
  );
};

export default Input;
