import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './js/views/mainpage.jsx';
import Login from './js/views/login.jsx';
import Dashboard from './js/views/dashboard';
import Register from './js/views/register.jsx';

import LoginStore from "./js/api/login"

export default function App() {
    const AuthenticateUser = ({user, redirect = '/login', children}) => {
        if (!user) {
          return <Navigate to={redirect} replace />;
        }

        return children;
    };

    const IsLoggedIn = ({user, redirect = '/dashboard', children}) => {
        if (user) {
          return <Navigate to={redirect} replace />;
        } 
        return children;
    };

    return (
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={
              <IsLoggedIn user={LoginStore.getCurrentUser()}>
                <Login/>
              </IsLoggedIn>
            } 
          />
          <Route path="/dashboard" element={
                <AuthenticateUser user={LoginStore.getCurrentUser()}>
                    <Dashboard/>
                </AuthenticateUser>
            } 
          />
        </Routes>
    )
}