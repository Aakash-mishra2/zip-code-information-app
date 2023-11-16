import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./locationSlice";
export const store = configureStore({
    reducer: {
        places: placeReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});