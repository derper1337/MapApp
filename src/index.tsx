import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {HashRouter} from "react-router-dom";

(window as any).store = store;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </HashRouter>
);
