import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {
    name:'',
    email:'',
    loggedIn: false
}

const userSlice = createSlice({
    name:'user',
    initialState:{value:{name:'',email:'',loggedIn:false}},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload
            console.log(state.value)
        },
        logout:(state)=>{
            state.value = {name:'',email:'',loggedIn:false}
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer