import {
    createSlice
  } from "@reduxjs/toolkit";
  export const UserSlice=createSlice ({
    name:"user",
    initialState:
    {
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
  
        },
        Logout:(state)=>{
            state.user=null;
  
        }
    }
  })
  export const {login,Logout}=UserSlice.actions;
  export const selectUser=(state)=>state.user.user;
  export default UserSlice.reducer;