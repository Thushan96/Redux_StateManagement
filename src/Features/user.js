import { createSlice } from "@reduxjs/toolkit"; //helps to create reducers in easy way

const initailStateValue={ name:"",age:0,email:""}; //to stop repeating codes

export const userSlice=createSlice({
    name:"user", //same as name of state
    initialState:{value:initailStateValue},//value will contain actual values of state in this case a object
    reducers:{
        login:(state,action)=>{ //state contain previous or current state values(initailState)
            state.value=action.payload //set new value to state
        },
        logout:(state)=>{
            state.value=initailStateValue;

        }
    }
})

export const {login,logout} =userSlice.actions; //To access actions

export default userSlice.reducer; //To access reducer in another file