import { Route, Routes, Navigate } from 'react-router-dom';

// import MainPage from './js/views/mainpage.jsx';
import Login from './js/views/login.jsx';
import Dashboard from './js/views/dashboard';
import Register from './js/views/register.jsx';
import AboutPage from './js/views/aboutpage.jsx';
import ShareList from './js/views/sharelist.jsx';
import Profile from './js/views/profile.jsx';

import AdminStore from "./js/api/user";

export default function App() {
    const AuthenticateUser = ({user, redirect = '/login', children}) => {
        if(user) {
          const expiry = window.atob(user.token.split(".")[1]).exp;
      
          if(expiry * 1000 < Date.now()) {
            return <Navigate to={redirect} replace />;
          }

          return children;
        }

        return <Navigate to={redirect} replace />;
    };

    const IsLoggedIn = ({user, redirect = '/dashboard', children}) => {
        if (user) {
          return <Navigate to={redirect} replace />;
        }

        return children;
    };

    return (
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={
              <IsLoggedIn user={AdminStore.getCurrentUser()}>
                <Login/>
              </IsLoggedIn>
            } 
          />
          <Route path="/dashboard" element={
                <AuthenticateUser user={AdminStore.getCurrentUser()}>
                    <Dashboard/>
                </AuthenticateUser>
            } 
          />
          <Route path="/share" element={
                <AuthenticateUser user={AdminStore.getCurrentUser()}>
                    <ShareList/>
                </AuthenticateUser>
            } 
          />
          <Route path="/profile" element={
                <AuthenticateUser user={AdminStore.getCurrentUser()}>
                    <Profile/>
                </AuthenticateUser>
            } 
          />
        </Routes>
    )
}