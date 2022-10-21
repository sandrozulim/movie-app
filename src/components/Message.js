import React from "react";
import "./Message.scss";

function Message({ message }) {
  return (
    <div>
      <h2 className="message">{message}</h2>
    </div>
  );
}

export default Message;
