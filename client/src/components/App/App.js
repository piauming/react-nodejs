import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/actions";
import { Home, Dashboard, Test, Notifications, Login } from '../../pages';
import { AppLayout, HomeLayout, ProtectedRoute } from '../../components';
import './App.css';

import io from 'socket.io-client';
const socket = io("http://localhost:7789");
socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        socket.on('notification', (data) => {
            dispatch(addMessage(data));
        });
    }, []);

    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="home" element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
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