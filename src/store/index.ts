import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authManager from "./reducers/authManager";
import contactsListManager from "./reducers/contactsListManager";

const userReucer = combineReducers({
  authManager, contactsListManager
});

export const store = configureStore({
  reducer: userReucer,
});

export type UserManagerType = ReturnType<typeof userReucer>;
export type StoreType = typeof store;
export type AppDispatch = StoreType["dispatch"];
