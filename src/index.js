import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


const root = ReactDOM.createRoot(document.querySelector('#root'));

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    reducers,
    composeEnhancer(applyMiddleware())
    );
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
);