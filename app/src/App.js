import React, { Component } from "react";

import "./App.css";
import AddPost from "./pages/AddPost";
import ViewPost from "./pages/ViewPost";
import ListPost from "./pages/ViewPost";
import Header from "./pages/Header";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  render() {
    return (
      <div className="App">
        <div className="app-header-container ">
          <Header />
        </div>
        <div className="app-addPost-container">
          <AddPost />
        </div>
      </div>
    );
  }
}

export default App;
