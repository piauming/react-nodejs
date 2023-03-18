import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Login, Home, Dashboard, Notifications } from '../../pages';
import './App.css';
// import birdImg from "../../assets/images/wbird.jpg";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;