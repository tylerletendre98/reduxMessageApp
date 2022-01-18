import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


const userSlice = createSlice({
    name:'user',
    initialState:{value:{
        users:null,
        currentLoggedInUser:{}
    }},
    reducers:{
        createNewUser:(state,action)=>{
            state.value.currentLoggedInUser = action.payload
            console.log(state.value.currentLoggedInUser)
        },
        getUsers:(state,action)=>{
            axios.get('http://localhost:5000/api/users/users')
            .then((res)=>{
                console.log(res.data)
            })
        },
        login:(state,action)=>{
            state.value.currentLoggedInUser = action.payload
        },
        logout:(state)=>{
            state.value.currentLoggedInUser={}
        }
    }
})

export const {login, logout,createNewUser,getUsers} = userSlice.actions
export default userSlice.reducer