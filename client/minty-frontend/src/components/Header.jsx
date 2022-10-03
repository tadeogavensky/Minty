import React from "react";
import PropTypes from "prop-types";

import photo from "../assets/img/profile.jpg";

import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCopy } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

export const Header = (props) => {
  const [clip, setClip] = useState("");

  const copy = (str) => {
   /*  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(str);
      return Promise.reject('The Clipboard API is not available.'); */
  };



  return (
    <div className="flex items-center justify-between  pt-8">
      <div className=" w-[70px] h-[70px] rounded-full bg-white">
        {/* <img src={props.profile_photo} alt="" /> */}
        <img
          src={photo}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      <div
        className="w-[200px] bg-white rounded-full flex items-center px-4 transition-all duration-300 hover:bg-gray-400 cursor-default"
        /* onClick={copy(document.getElementById("wallet").textContent)} */
      >
        <p id="wallet" className="truncate font-semibold">
          {props.address}
        </p>
        <AiOutlineCopy size={50} />
      </div>
    </div>
  );
};

Header.defaultProps = {
  address: "0xaF6cD782d3bD308558C52E59617C33aBC44796F5",
};
