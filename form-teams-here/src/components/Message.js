import React from "react";

function Message({ text }) {
  return (
    <div className="notebook-editable">
      <p className="notebook-editable-p-highlighter">
        {text}
        <span> &#128512;</span>
      </p>
    </div>
  );
}

export default Message;
