import React from "react";
import "../Styles/atomicComponents/textArea.css";

const TextArea = props => {
  console.log(props);
  return (
    <div className="text-container">
      <textarea rows={props.rows} cols={props.cols}></textarea>
    </div>
  );
};

export default TextArea;

