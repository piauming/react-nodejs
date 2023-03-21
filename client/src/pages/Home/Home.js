import React, { useEffect } from "react";
import { Link, useOutlet } from "react-router-dom";
import { Dashboard } from "../../pages";
import './Home.css';

const Home = (props) => {
    const outlet = useOutlet();

    return (
        <div style={{backgroundColor: 'white', display: 'flex', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div className="side-menu">
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