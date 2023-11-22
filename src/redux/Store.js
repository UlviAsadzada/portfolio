import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const Store=configureStore({
     reducer:{
          theme:themeSlice
     }
})

export default Store;