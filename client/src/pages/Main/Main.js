import React, { useEffect } from "react";
import { Link, useOutlet } from "react-router-dom";
import { Dashboard, About } from "..";

const Main = (props) => {
    const outlet = useOutlet();

    return (
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%'}}>
                <div style={{ backgroundColor: "#f8f9fd", width: 150 }}>
                    <ul style={{padding: 0}}>
                        <Link to="dashboard">Dashboard</Link>
                        <Link to="about">
                            <About />
                        </Link>
                    </ul>
                </div>
                <div style={{width: 'calc(100% - 150px)'}}>
                    {outlet || <Dashboard />}
                </div>
            </div>

    );
}

export default Main;