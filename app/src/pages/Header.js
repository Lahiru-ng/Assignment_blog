import React from "react";
import Home from "./Home";
import Favor from "./Favor";
//import ReactDOM from 'react-dom';

import "../Styles/atomicComponents/button.css";
import "../Styles/pages/header.css";
//import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter as Router, Route , Link, Switch } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <Router>
        <div className="header-container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-brand">Twitter App</div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <div class="nav-link">
                    <Link to="/">Home</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link">
                    <Link to="/seeall">See All Posts</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link">
                    <Link to="/favourite">Favourite posts</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favourite" component={Favor} />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
