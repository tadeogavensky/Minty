import React from "react";
import PropTypes from "prop-types";



import photo from "../assets/img/profile.jpg";

import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCopy } from "react-icons/ai";
import { useState } from "react";

export const Header = (props) => {
  const [clip, setClip] = useState("");

  const copy = ()=>{
    var Text = document.getElementById("textbox");
  
    /* Select the text inside text area. */
    Text.select();

    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(Text.value);

    /* Set the copied text as text for 
    div with id clipboard */
    document.getElementById("clipboard")
        .innerHTML = Text.value;
  }
 
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

    
        <div className="w-[200px] bg-white rounded-full flex items-center px-4 transition-all duration-300 hover:bg-gray-400 cursor-default">
          <p id="address" className="truncate font-semibold">
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
