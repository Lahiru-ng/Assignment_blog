import React from "react";
import "../Styles/atomicComponents/button.css";
import "../Styles/pages/header.css";

const Header = props => {
  return (
    <div className="header-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Twitter App
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                See All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Favourite
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
