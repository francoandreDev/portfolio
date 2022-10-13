import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./components/home/Home";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>
    </React.StrictMode>
);
