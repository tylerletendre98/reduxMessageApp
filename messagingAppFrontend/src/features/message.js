import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateValue = {
   messages:[]
}


const messageSlice = createSlice({
    name:'message',
    initialState:{value:{initialStateValue}},
    reducers:{
        createMessage:(state,action)=>{
            axios.post(`http://localhost:5000/api/users/sendMessage`,action.payload)
            .then((res)=>{
                console.log(res.data)
            })
        }
    }
})

export const {createMessage} = messageSlice.actions
export default messageSlice.reducer;