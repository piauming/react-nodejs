import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home, Dashboard, Notifications, Missing } from '../../pages';
import { Layout, PrivateRoute } from "../../components";
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* protected routes */}
                <Route exact path='/' element={<PrivateRoute />}>
                    <Route path="/home" element={<Home />}>
                        <Route index element={<Dashboard />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Route>


                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
};

export default App;