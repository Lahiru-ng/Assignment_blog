import React from "react";
import TextArea from "../atomicComponents/TextArea";
import Button from "../atomicComponents/Button";
import "../Styles/pages/addPost.css";

class AddPost extends React.Component {
  render() {
    return (
      <div className="addPost-container">
        <TextArea rows="10" cols="80" />
        <Button type="text" text="POST" />
      </div>
    );
  }
}
export default AddPost;
