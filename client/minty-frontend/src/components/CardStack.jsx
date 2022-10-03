import React, { useState, useEffect } from "react";

import TinderCard from "react-tinder-card";

import { AiOutlineHeart } from "react-icons/ai";
import {
  BsArrowRight,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsTags,
} from "react-icons/bs";
import { BiWallet } from "react-icons/bi";

import "../assets/css/card.css";

import eth from "../assets/img/eth.svg";

const nfts = [
  {
    name: "Richard Hendricks",
    url: "https://i.seadn.io/gae/3KzAPAl-ZVFo22TJaZzqk_Xg0xyo-4ACPnv6B1dugHNY5I_hWMyBX2yb-sPZZYXP03XB-Os33Hi-l_gJUNwtiovGdhWWxrCLdJQESg?auto=format&w=512",
    collection: "ABC(abracadabra)",
    price: 0.12435,
    priceUsd: 244,
  },
  {
    name: "Erlich Bachman",
    url: "https://img.seadn.io/files/2442ae829d70c733402b03b0f2e342da.png?auto=format&fit=max&w=384",
    collection: "Kitaro World",
    price: 0.1342435,
    priceUsd: 244,
  },
  {
    name: "Jack Windsor",
    url: "https://i.seadn.io/gae/lIB86C3oSEbbFUhqYKIXzcRQTS5udbPYMPKfnuKOE3OIP7QOH3-n92SY7YWgzgYApnHrVM_Al_O4nUMszDanQdzI8r8H8ZTzazxNte8?auto=format&w=512",
    collection: "EmoHeads",
    price: 1.12435,
    priceUsd: 244,
  },

  {
    name: "Harry III",
    url: "https://i.seadn.io/gae/UeE6ZJlBMk6tk7BvT4N0Ongq8mArIh1XLhxR50BPAaF4PpMBelnFklTw5A3hq7szrdhtHcQ4d6s_T0Zu3KyPfar3Gxv1kOa0mK9-Wg?auto=format&w=512",
    collection: "EmoHeads",
    price: 6.535,
    priceUsd: 244,
  },

  {
    name: "Mike Douglas",
    url: "https://img.seadn.io/files/46cc8e402e925e66cc0c293439c88340.png?auto=format&fit=max&w=384",
    collection: "Kitaro World",
    price: 0.562435,
    priceUsd: 244,
  },
];

export const CardStack = () => {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const onSwipe = () => {};

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const expand = () => {
    const card = document.getElementById("card");
    card.classList.contains("expandedCard")
      ? card.classList.remove("expandedCard")
      : card.classList.add("expandedCard");
  };

  return (
    <div className="mt-6">
      {nfts.map((nft) => (
        <TinderCard
          className="swipe mr-4"
          key={nft.name}
          onSwipe={(dir) => swiped(dir, nft.name)}
          onCardLeftScreen={() => outOfFrame(nft.name)}
        >
          <div
            id="card"
            className="flex flex-col items-center rounded-2xl relative bg-white mb-4 sm:w-[300px]"
            onClick={() => {
              expand();
            }}
          >
            <div className="relative">
              <img
                src={nft.url}
                alt=""
                className="object-cover w-full h-full rounded-tl-2xl rounded-tr-2xl relative shadow-md"
              />
              <div className="w-full  items-start absolute bottom-0 left-0 p-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <button>
                      <div className=" group rounded-full bg-white p-4 flex justify-center hover:bg-[#74d6a1] transition-all duration-200 ">
                        <BsFillHandThumbsDownFill
                          size={30}
                          className="text-[#75d6a1] group-hover:text-white "
                        />
                      </div>
                    </button>
                    <button>
                      <div className="group rounded-full bg-white p-4 flex justify-center hover:bg-[#74d6a1] transition-all duration-200">
                        <BsFillHandThumbsUpFill
                          size={30}
                          className="text-[#75d6a1] group-hover:text-white "
                        />
                      </div>
                    </button>
                  </div>
                  <button className="group flex items-center justify-between rounded-full w-full font-semibold ml-3 p-4 bg-white hover:bg-black hover:text-white transition-all duration-300 ">
                    View <BsArrowRight size={30} />
                  </button>
                </div>
              </div>
            </div>
            <button className="absolute right-0">
              <AiOutlineHeart
                id="fav"
                size={60}
                className=" m-3 bg-[#F7F6F9] rounded-full text-red-500 p-4 hover:bg-red-500 hover:text-white transition-all duration-200"
              />
            </button>
            <h1 className="semibold glossy absolute  left-0 top-0 mt-5 ml-4 text-xl text-white p-2">
              {nft.name}
            </h1>

            <div className="meta pt-4 flex flex-col gap-3 pl-3 pr-3 placeholder-amber-300 rounded-bl-2xl rounded-br-2xl w-full shadow-md">
              <p className="bold text-2xl">{nft.name}</p>

              <div className="flex items-center">
                <div className="w-4">
                  <img src={eth} alt="" />
                </div>
                <h3 className="ml-3 font-bold">{nft.price}</h3>
                <h6 className="ml-3 text-[14px]">${nft.priceUsd}</h6>
              </div>

              <div className="flex items-center justify-center gap-4 mb-4 ">
                <button className="flex items-center font-bold gap-2 px-4 py-2 rounded-md text-white shadow-sm hover:brightness-125 bg-[#75d6a1] transition-all duration-200 ">
                  <BiWallet /> Buy now
                </button>
                <button className="flex items-center font-bold gap-2 px-6 py-2 rounded-md shadow-sm border border-black hover:brightness-125 hover:text-[#75d6a1] transition-all duration-200">
                  <BsTags /> Make offer
                </button>
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};
