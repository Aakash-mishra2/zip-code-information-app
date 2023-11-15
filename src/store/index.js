import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./locationSlice";
export const store = configureStore({
    reducer: {
        userAccount: userReducer,
    }
});