import React from 'react';
import ReactDOM from 'react-dom';
import { usePromiseTracker } from "react-promise-tracker";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
    <h1 className='loading'>Images are on the way ...</h1>
    
  );  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
