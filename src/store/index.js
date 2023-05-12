import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfoSlice.slice";
import cart from "./slices/cart.slice";


export default configureStore({
    reducer: {
        userInfo,
        cart,
    },
})