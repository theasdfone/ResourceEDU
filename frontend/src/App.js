import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './js/views/mainpage.jsx';
import Login from './js/views/login.jsx';
import Dashboard from './js/views/dashboard';
import CreateUser from './js/views/createuser.jsx';

import LoginStore from "./js/api/login"

export default function App() {
    const AuthenticateUser = ({user, redirect = '/login', children}) => {
        console.log(user);
        if (!user) {
          return <Navigate to={redirect} replace />;
        }

        return children;
    };

    return (
        <Routes>
          <Route path="/" element={<MainPage/>} exact />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={
                <AuthenticateUser user={LoginStore.getCurrentUser()}>
                    <Dashboard/>
                </AuthenticateUser>
            } 
          />
          <Route path="/createuser" element={<CreateUser/>} />
        </Routes>
    )
}