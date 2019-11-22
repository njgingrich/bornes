import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

import { IndexPage } from "./pages";

render(
  <Provider store={store}>
    <IndexPage />
  </Provider>,
  document.getElementById("root")
);
