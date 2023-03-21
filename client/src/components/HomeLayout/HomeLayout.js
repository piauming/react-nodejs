import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useOutlet, useNavigate } from "react-router-dom";
import useAxiosWithCredentials from "../../hooks/useAxiosWithCredentials";
import useAuth from '../../hooks/useAuth'

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
        } catch  (err) {
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
            <div>
                <ul className='top-nav'>
                    <Link to='main' className="logo">LITEON</Link>
                    <div>
                        <Notification />
                        <Link to={{}} onClick={logoutHandler}>Logout</Link>
                    </div>
                </ul>
            </div>
            <div>
                {outlet}
            </div>
        </div>
    );
}

export default HomeLayout;