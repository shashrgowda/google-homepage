import { AccountCircle, Apps } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <ul>Gmail</ul>
      <ul>Images</ul>
      <ul>
        <span className="material-icons">
          <Apps color="disabled" />
        </span>
      </ul>
      <ul>
        <span className="material-icons">
          <AccountCircle color="disabled" />
        </span>
      </ul>
    </div>
  );
};

export default Navbar;
