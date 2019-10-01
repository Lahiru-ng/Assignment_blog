import React from "react";
import PropTypes from "prop-types";
import "../Styles/atomicComponents/button.css";
import "../Styles/pages/header.css";

const Header = props => {
  return (
    <div>
      <div className="menu-container">
        <u>Twitter</u>
      </div>
      <div className="list-container">
        <li>Home</li>
        <li>See All</li>
        <li>Favorite</li>
      </div>
    </div>
  );
};

export default Header;
