import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'user',
    initialState:{value:{
        users:[],
        currentLoggedInUser:{}
    }},
    reducers:{
        createNewUser:(state,action)=>{
            state.value.users.push(action.payload)
            state.value.currentLoggedInUser =action.payload
        },

        login:(state,action)=>{
            state.value.currentLoggedInUser= action.payload
        },
        logout:(state)=>{
            state.value.currentLoggedInUser={}
        }
    }
})

export const {login, logout,createNewUser} = userSlice.actions
export default userSlice.reducer