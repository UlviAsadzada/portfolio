import { createSlice } from "@reduxjs/toolkit";

const initialState={
     darkMode:false
}

export const themeSlice=createSlice({
     name:"theme",
     initialState,
     reducers:{
          setDarkTheme(state){
               state.darkMode=true
          },
          setDefaultTheme(state){
               state.darkMode=false
          }

     }
})

export const{setDarkTheme,setDefaultTheme}=themeSlice.actions
export default themeSlice.reducer