import React, { Component } from "react";

import "./App.css";
import AddPost from "./pages/AddPost";
import ListPost from "./pages/ListPost";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <AddPost />
        </div>
        <div>
          <ListPost />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
