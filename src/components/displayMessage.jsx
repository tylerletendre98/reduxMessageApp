import React from "react";
import { useSelector } from "react-redux";

function DisplayMessage() {
  const data = useSelector((state) => state.message.value);
  const messages = data.initialStateValue.messages;

  return (
    <div>
      {messages.map((message) => {
        return (
          <div>
            <h3>{message.user}</h3>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayMessage;
