import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className} + " " + rounded-full py-3 px-6 hover:scale-110 transition-all`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
