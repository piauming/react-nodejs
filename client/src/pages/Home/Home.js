import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeLoginUser } from '../../redux/actions';
import { isEmpty } from "lodash";

import './Home.css';

const Home = (props) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        // dispatch(removeLoginUser());
    }

    return (
        <div>
            <nav className="home-nav">
                <h1>Home</h1>
                <Link to="notifications">Notifications</Link>
                <Link to="dashboard">Dashboard</Link>
                <Link to={{}} onClick={logoutHandler} >Logout</Link>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;