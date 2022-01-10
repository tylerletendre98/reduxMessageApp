import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
   messages:[
       {
           user:'tyler',
           message:'hello world'
       },
       {
           user:'jackson',
           message:'hello world'
       }
   ]
}

const messageSlice = createSlice({
    name:'message',
    initialState:{value:{initialStateValue}},
    reducers:{
        createMessage:(state,action)=>{
            state.value.initialStateValue.messages.push(action.payload)
        }
    }
})

export const {createMessage} = messageSlice.actions
export default messageSlice.reducer;