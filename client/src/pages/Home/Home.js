import React from "react";
import { Outlet, Link } from "react-router-dom";

import './Home.css';

const Home = (props) => {
    return (
        <div>
            <nav className="home-nav">
                <h1>Home</h1>
                <Link to="notifications">Notifications</Link>
                <Link to="dashboard">Dashboard</Link>
                <Link to="/" >Logout</Link>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;