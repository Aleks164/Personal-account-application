import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userManager from "./reducers/userManager";

const userReucer = combineReducers({
    userManager,
})

export const store = configureStore({
    reducer: userReucer,
});

export type UserManagerType = ReturnType<typeof userReucer>;
export type StoreType = typeof store;
export type AppDispatch = StoreType['dispatch'];