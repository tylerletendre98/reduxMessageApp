import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {
    name:'',
    email:'',
    age:'',
    loggedIn: false
}

const userSlice = createSlice({
    name:'user',
    initialStateValue:{value:{initialStateValue}},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload
        },
        logout:(state,action)=>{
            state.value = initialStateValue
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer