import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Loader from '../../Components/Loader';
const Home = lazy(() => import('../../Pages/Home'));
const Profile = lazy(() => import('../../Pages/Profile'));
const Login = lazy(() => import('../../Pages/Login'));
const Register = lazy(() => import('../../Pages/Register'));

function AppRouter() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;