import { createSlice } from "@reduxjs/toolkit"; //helps to create reducers in easy way

const initailStateValue=''; //to stop repeating codes

export const themeSlice=createSlice({
    name:"theme", //same as name of state
    initialState:{value:initailStateValue},//value will contain actual values of state in this case a object
    reducers:{
        changeColor:(state,action)=>{ //state contain previous or current state values(initailState)
            state.value=action.payload //set new value to state
        }
    }
})

export const { changeColor } =themeSlice.actions; //To access actions

export default themeSlice.reducer; //To access reducer in another file