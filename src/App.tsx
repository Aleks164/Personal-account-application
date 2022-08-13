import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { PersonalAccount } from "./components/PersonalAccount";

export const App = () => (
    <Provider store={store}>
        <PersonalAccount />
    </Provider>
);
