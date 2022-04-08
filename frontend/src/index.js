import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import MainPage from './js/views/mainpage.jsx';
import Login from './js/views/login.jsx';
import Dashboard from './js/views/dashboard';
import CreateUser from './js/views/createuser.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} exact />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/createuser" element={<CreateUser/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);