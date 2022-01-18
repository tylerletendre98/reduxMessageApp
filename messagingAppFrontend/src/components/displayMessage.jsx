import React from "react";
import {useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux";
import {getMessages}from '../features/message'
import axios from "axios";

function DisplayMessage() {

  const dispatch = useDispatch()
  const messages = useSelector((state)=>state.message.value.initialStateValue.messages)
  console.log(messages)
  useEffect(() => {
    axios.get('http://localhost:5000/api/users/getMessages')
    .then((res)=>{
       dispatch(getMessages(res.data))
    })
  }, [messages.length])
if (messages !== undefined){
  return (
    <div>
      {messages.map((message) => {
        return (
          <div>
            <h3>{message.sender}</h3>
            <p>{message.text}</p>
          </div>
        );
      })}
    </div>
  );
}else{
  return(
    <div>
      <h3>Loading</h3>
    </div>
  )
}
}

export default DisplayMessage;
