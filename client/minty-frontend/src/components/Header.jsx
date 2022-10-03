import React from "react";
import PropTypes from "prop-types";

import photo from "../assets/img/profile.jpg";

import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCopy } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

export const Header = (props) => {
  const [clip, setClip] = useState("");

  const [user, setUser] = useState(null);

  return (
    <div className="flex items-center justify-between pt-8">
      <div className=" w-[70px] h-[70px] rounded-full bg-white">
        {/* <img src={props.profile_photo} alt="" /> */}
        <img
          src={photo}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {user == null ? (
        <button>
          <div
            className=" px-4 py-6 group bg-white rounded-full flex items-center ease-out duration-300 hover:bg-[#74D6a1]"
            /* onClick={copy(document.getElementById("wallet").textContent)} */
          >
            <p className="font-semibold group-hover:text-white">
              Connect to Wallet
            </p>
          </div>
        </button>
      ) : (
        <button>
          <div
            className="w-[200px] bg-white rounded-full flex items-center px-4 transition-all duration-300 hover:bg-gray-400"
            /* onClick={copy(document.getElementById("wallet").textContent)} */
          >
            <p id="wallet" className="truncate font-semibold">
              {props.address}
            </p>
            <AiOutlineCopy size={50} />
          </div>
        </button>
      )}
    </div>
  );
};

Header.defaultProps = {
  address: "0xaF6cD782d3bD308558C52E59617C33aBC44796F5",
};
