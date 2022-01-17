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
            let newUser = action.payload
            axios.post('http://localhost:5000/api/users/newUser',newUser)
            state.value.currentLoggedInUser = newUser
        },
        getUsers:(state,action)=>{
            axios.get('http://localhost:5000/api/users/users')
            .then((res)=>{
                console.log(res.data)
            })
        },
        login:(state,action)=>{
            console.log(action.payload)
            axios.get('http://localhost:5000/api/users/login', action.payload)
            .then((res)=>{
                console.log(res.data)
            })
        },
        logout:(state)=>{
            state.value.currentLoggedInUser={}
        }
    }
})

export const {login, logout,createNewUser,getUsers} = userSlice.actions
export default userSlice.reducer