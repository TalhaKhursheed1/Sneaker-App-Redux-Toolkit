import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../NewRedux/ProductSlice"
import cartReducer from "../NewRedux/CartSlice"
import userReducer from "../NewRedux/UserSlice"
import authReducer from "../NewRedux/AuthSlice"
export const myStore = configureStore({
  reducer: {
    // products: productReducer,
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
  
  },
});
