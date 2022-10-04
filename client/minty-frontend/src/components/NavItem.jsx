import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

export const NavItem = (props) => {
  const defaultStyle = {
    display: "flex",
    alignItems: "center",
    borderRadius:"9999px",
    padding:"3vw",
    marginRight: "5vw",
    
  };

  const iconDefaultStyle = {
    marginRight: "1vw",
  };

  return (
    <NavLink
      to={props.location}
      style={defaultStyle}
      className={({ isActive }) =>
        isActive ? "active-navItem" : "inactive-navItem"
      }
    > 
      <i style={iconDefaultStyle}>{props.item_icon}</i>
      <p>{props.item_menu}</p>
    </NavLink>
  );
};
