import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import persistedReducer from "./modules";

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
