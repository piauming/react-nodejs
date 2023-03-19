import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { removeLoginUser } from '../../redux/actions';
import { isEmpty } from "lodash";
import './Home.css';

const NotificationLink = () => {
    const notifications = useSelector((state) => { return state.notifications });

    useEffect(()=>{
        console.log("--> notifications", notifications);
    },[notifications]);
    

    return (
        <Link to="notifications">Notifications</Link>
    );
}

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
                <NotificationLink />
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