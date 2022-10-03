import React, { useState, useEffect } from "react";

import TinderCard from "react-tinder-card";

import { AiOutlineHeart } from "react-icons/ai";
import {
  BsArrowRight,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";

const nfts = [
  {
    name: "Richard Hendricks",
    url: "https://i.seadn.io/gae/3KzAPAl-ZVFo22TJaZzqk_Xg0xyo-4ACPnv6B1dugHNY5I_hWMyBX2yb-sPZZYXP03XB-Os33Hi-l_gJUNwtiovGdhWWxrCLdJQESg?auto=format&w=512",
    collection: "ABC(abracadabra)",
  },
  {
    name: "Erlich Bachman",
    url: "https://img.seadn.io/files/2442ae829d70c733402b03b0f2e342da.png?auto=format&fit=max&w=384",
    collection: "Kitaro World",
  },
  {
    name: "Jack Windsor",
    url: "https://i.seadn.io/gae/lIB86C3oSEbbFUhqYKIXzcRQTS5udbPYMPKfnuKOE3OIP7QOH3-n92SY7YWgzgYApnHrVM_Al_O4nUMszDanQdzI8r8H8ZTzazxNte8?auto=format&w=512",
    collection: "EmoHeads",
  },
  {
    name: "Harry III",
    url: "https://i.seadn.io/gae/UeE6ZJlBMk6tk7BvT4N0Ongq8mArIh1XLhxR50BPAaF4PpMBelnFklTw5A3hq7szrdhtHcQ4d6s_T0Zu3KyPfar3Gxv1kOa0mK9-Wg?auto=format&w=512",
    collection: "EmoHeads",
  },
  {
    name: "Mike Douglas",
    url: "https://img.seadn.io/files/46cc8e402e925e66cc0c293439c88340.png?auto=format&fit=max&w=384",
    collection: "Kitaro World",
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

  return (
    <div className="mt-6">
      {nfts.map((nft) => (
        <TinderCard
          className="swipe mr-4"
          key={nft.name}
          onSwipe={(dir) => swiped(dir, nft.name)}
          onCardLeftScreen={() => outOfFrame(nft.name)}
        >
          <div className="flex flex-col rounded-2xl relative bg-red-400 mb-4 sm:w-[300px]">
            <img
              src={nft.url}
              alt=""
              className="object-cover w-full h-full rounded-2xl relativel"
            />
            <AiOutlineHeart
              id="fav"
              size={60}
              className="absolute m-3 bg-[#F7F6F9] rounded-full right-0 text-red-500 p-4 hover:bg-red-500 hover:text-white transition-all duration-200"
            />

            <h1 className="semibold glossy absolute top-0 mt-5 ml-4 text-xl text-white p-2">{nft.name}</h1>
            <div className="w-full flex items-start flex-col absolute bottom-0 left-0  p-3  mb-4">
              <div className="flex items-center justify-between w-full mt-6">
                <div className=" group rounded-full bg-white p-4 flex justify-center hover:bg-[#74d6a1] transition-all duration-200 ">
                  <BsFillHandThumbsDownFill
                    size={30}
                    className="text-[#75d6a1] group-hover:text-white "
                  />
                </div>
                <div className="group rounded-full bg-white p-4 flex justify-center hover:bg-[#74d6a1] transition-all duration-200">
                  <BsFillHandThumbsUpFill
                    size={30}
                    className="text-[#75d6a1] group-hover:text-white "
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 flex justify-between w-full pl-6 pr-6 pb-6"></div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};
