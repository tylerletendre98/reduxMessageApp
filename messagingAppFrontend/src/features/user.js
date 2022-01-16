import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


const userSlice = createSlice({
    name:'user',
    initialState:{value:{
        currentLoggedInUser:{}
    }},
    reducers:{
        createNewUser:(state,action)=>{
            let newUser = action.payload
            axios.post('http://localhost:5000/api/users/newUser',newUser)
            .then(res =>{
                console.log(res)
            })
            
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