import React from 'react';
import ReactDOM from 'react-dom';
import items from './data'
import './index.css';
import model from './model'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {storeProvider,createStore, StoreProvider} from 'easy-peasy'
import * as serviceWorker from './serviceWorker';
const store = createStore(model,items)
ReactDOM.render(
    <StoreProvider store={store}>
<Router>
<App />
</Router>
</StoreProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
