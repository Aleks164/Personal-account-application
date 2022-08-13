import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersonalAccount } from "./components/PersonalAccount";

export const App = () => (
  <Provider store={store}>
    <PersonalAccount />
  </Provider>
);
