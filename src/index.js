import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//we use a Provider component to wrap the App with - any component or child component
//within the Provider wrapper will have access to the states in the Store.
import { Provider } from 'react-redux'
//we import the Store we created so we can pass it to the Provider copmonent as a prop
import { store } from './state/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
