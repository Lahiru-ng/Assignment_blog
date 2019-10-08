import React from "react";
import "../Styles/pages/viewPost.css";
import "../Styles/fontawarsome/css/all.css";

class ViewPost extends React.Component {
  render() {
    return (
      <div key={this.props.post.id} className="post-container">
        {this.props.post.text}
        <div>
          <button className="button-div">
            <i class="far fa-heart"></i>
          </button>
          <button className="button-div">
            <i class="far fa-window-close"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ViewPost;
