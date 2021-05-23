import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {InputProvider} from "./contexts/input-context"
import {QuizContextProvider} from "./contexts/quiz-context"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <InputProvider>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </InputProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


