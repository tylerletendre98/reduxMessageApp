import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createMessage } from "../features/message";

function CreateNewMessage() {
  const currentLoggedInUser = useSelector(
    (state) => state.user.value.currentLoggedInUser
  );
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    const newMessage = {
      user: currentLoggedInUser.username,
      message: text,
    };
    dispatch(createMessage(newMessage));
    setText("");
  };

  return (
    <div>
      <div>
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
