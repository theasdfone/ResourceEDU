import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './Pages/mainPage';
import Login from './Pages/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import LoginHome from './Pages/loginHome';
import CreateUser from './Pages/createUser';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/login" component={Login} />
          <Route path="/test" component={LoginHome} />
          <Route path="/createUser" component={CreateUser} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
