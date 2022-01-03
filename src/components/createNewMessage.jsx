import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../features/message";

function CreateNewMessage() {
  const [text, setText] = useState("");
  const [sender, setSender] = useState("");

  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSenderChange = (e) => {
    setSender(e.target.value);
  };
  const handleSubmit = (e) => {
    const newMessage = {
      user: sender,
      message: text,
    };
    dispatch(createMessage(newMessage));
    setSender("");
    setText("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={sender}
          placeholder="Who is sending message?"
          onChange={handleSenderChange}
        />
        <input
          type="textarea"
          placeholder="Please enter a message"
          width={300}
          height={10}
          onChange={handleTextChange}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default CreateNewMessage;
