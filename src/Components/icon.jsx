import React from "react";
import cn from "classnames";


const icons = {
  
 };



const Icon = (props) => {
  const size = props.size ? props.size : 16;
  return (
    <svg
      className={cn(props.className)}
      width={size}
      height={size}
      viewBox={props.viewBox ? props.viewBox : "0 0 16 16"}
      fill={props.fill}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={icons[props.name]}></path>
    </svg>
  );
};

export default Icon;