import React, { useEffect } from "react";
import { Link, Outlet, useOutlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "../../pages";
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
    const outlet = useOutlet();
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    return (
        <div style={{backgroundColor: 'white', display: 'flex', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div style={{backgroundColor: 'yellow'}}>
                    <ul style={{width:150, padding: 0}}>
                        <Link to="dashboard">Dashboard</Link>
                        <Link to="test">Test</Link>
                    </ul>
                </div>
                <div style={{width: '80%'}}>
                    {outlet || <Dashboard />}
                </div>
            </div>
        </div>



    );
}

export default Home;