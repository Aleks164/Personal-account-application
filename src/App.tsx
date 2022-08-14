import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./AppRoutes";

export const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
