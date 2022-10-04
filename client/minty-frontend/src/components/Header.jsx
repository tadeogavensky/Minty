import { ethers } from "ethers";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import photo from "../assets/img/profile.jpg";

import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCopy } from "react-icons/ai";

import UserContext from "../App";

export const Header = (props) => {
  /* const userContext = useContext(UserContext); */

/*   const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
 */
  const [account, setAccount] = useState();



  const [user, setUser] = useState(null);

  const Connect = async () => {
   const provider =new ethers.providers.Web3Provider(window.ethereum)
   setAccount(await provider.send("eth_requestAccounts",[]))
   console.log('account', account)
  };

 /*  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setdata({
          
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    setdata({
      address: account,
    });
  

    getbalance(account);

  
    console.log( getbalance(account))

  }; */

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
        <button
          onClick={() => {
            Connect();
          }}
        >
          <div className=" px-4 py-6 group bg-white rounded-full flex items-center ease-out duration-300 hover:bg-[#74D6a1]">
            <p className="font-semibold group-hover:text-white">
              Connect to Wallet
            </p>
          </div>
        </button>
      ) : (
        <button>
          <div className="w-[200px] bg-white rounded-full flex items-center px-4 transition-all duration-300 hover:bg-gray-400">
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
