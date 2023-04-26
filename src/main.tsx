import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore } from "redux";
import dragInfoReducer from "./redux/reducers"
import { Provider } from 'react-redux';


const store = createStore(dragInfoReducer);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
