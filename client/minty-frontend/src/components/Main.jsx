import React from "react";
import svg1 from "../assets/img/svg1.svg";
import svg2 from "../assets/img/svg2.svg";

import PropTypes from "prop-types"





export const Main = (props) => {
  return (
    <div className="flex justify-between items-center mt-12">
      <h1 className="text-4xl">Hello, <span className="font-extrabold">{props.name}</span></h1>
    </div>
  );
};

Main.defaultProps={
  name: "Tadeo"
}
