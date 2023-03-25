import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useOutlet, useNavigate } from "react-router-dom";
import useAxiosWithCredentials from "../../hooks/useAxiosWithCredentials";
import useAuth from '../../hooks/useAuth';

const Notification = () => {
    const messages = useSelector((state) => { return state.messages });
    return (
        <Link to='notifications' className="notification">
            <span>Notifications</span>
            {(messages.length > 0) &&
                <span className="badge">{messages.length}</span>
            }
        </Link>
    );
}

const HomeLayout = () => {
    const { setAuth } = useAuth();
    const outlet = useOutlet();
    const navigate = useNavigate();
    const axiosWithCredentials = useAxiosWithCredentials();

    const logoutHandler = async () => {
        try {
            await axiosWithCredentials.get('/logout');
            setAuth({});
            navigate("/login", { replace: true });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (!outlet) {
            navigate("main", { replace: true });
        }
    }, []);

    return (
        <div>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 22, backgroundColor: 'ghostwhite' }}>
                <ul className='top-nav'>
                    <Link to='main' className="logo">Home</Link>
                    <div>
                        <Notification />
                        <Link to={{}} onClick={logoutHandler}>Logout</Link>
                    </div>
                </ul>
            </div>
            <div style={{ marginTop: 60, width: '100%', overflowY: 'hidden' }}>
                <div style={{ display: "flex", width: '100%', minHeight: 'calc(100vh - 60px)' }}>
                    <div style={{ width: '100%' }}>
                        {outlet}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLayout;