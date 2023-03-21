import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, Dashboard, Test, Notifications, Login } from '../../pages';
import { AppLayout, HomeLayout } from '../../components';
import './App.css';

import io from 'socket.io-client';
const socket = io("http://localhost:7789");
socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});

const App = () => {
    useEffect(() => {
        socket.on('notification', (data) => {
            console.log("notification with data!!! ", data);
        });
    }, []);

    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Login />} />
                <Route path="home" element={<HomeLayout />}>
                    <Route path="main" element={<Home />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="test" element={<Test />} />
                    </Route>
                    <Route path="notifications" element={<Notifications />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;