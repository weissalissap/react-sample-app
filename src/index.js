import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initalState = {
  name: "Redux Counter",
  count: 10
};

const reducer = (state = initalState, action) => {
  if (action.type == 'increment')
    return { ...state, count: state.count + action.payload };
  else if (action.type == 'decrement')
    return { ...state, count: state.count - 1 };
  else
    return state;
};


const store = createStore(reducer);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


