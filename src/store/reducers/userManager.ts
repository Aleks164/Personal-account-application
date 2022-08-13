import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
}

export interface UserManagerStateType {
  users: UserType[];
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

const initialState: UserManagerStateType = {
  users: [], /// !!!!!!
  isLoading: false,
  isAuth: false,
  error: "",
};

export const userManager = createSlice({
  name: "userManager",
  initialState,
  reducers: {
    authentication: (state) => {
      state.isLoading = true;
    },
    logInSucsess: (state) => {
      (state.isAuth = true), (state.isLoading = false);
    },
    logInError: (state, action: PayloadAction<string>) => {
      (state.error = action.payload), (state.isLoading = false);
    },
    logOut: (state) => {
      state.isAuth = false;
    },

    addUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<UserType["id"]>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  addUser,
  deleteUser,
  authentication,
  logInSucsess,
  logInError,
  logOut,
} = userManager.actions;

export default userManager.reducer;
