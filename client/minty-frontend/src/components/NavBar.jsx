import React from "react";
import { NavItem } from "./NavItem";

import { IoMdImages } from "react-icons/io";
import {AiOutlineHeart} from "react-icons/ai"
import {RiBearSmileLine} from "react-icons/ri"
import {HiOutlineChartBar} from "react-icons/hi"

export const NavBar = () => {
  return (
    <div className="flex items-center justify-start w-full   mt-8">
      <NavItem item_icon={<IoMdImages size={30} />} item_menu={"Stack"} location={"/stack"}/>
      <NavItem item_icon={<AiOutlineHeart size={30} />} item_menu={"Favorites"} location={"/favorites"}/>

      <NavItem item_icon={<HiOutlineChartBar size={30} />} item_menu={"Trending"} location={"/trending"}/>

      <NavItem item_icon={<RiBearSmileLine size={30} />} item_menu={"Friends"} location={"/friends"}/>
    </div>
  );
};
