import React from "react";
import Button from "../atomicComponents/Button";
import "../Styles/pages/viewPost.css";

class ViewPost extends React.Component {
  render() {
    return (
      <div className="post">
        <p>123qweqwe weqweqweqweqwe</p>
        <div className="button-group">
          <Button type="icon" iconType="favor" />
          <Button type="icon" iconType="close" />
        </div>
      </div>
    );
  }
}
export default ViewPost;
