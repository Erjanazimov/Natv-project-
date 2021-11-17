import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./i18n";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

export let rerenderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App dispatch={store.dispatch.bind(store)} store={store.getState()}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)

