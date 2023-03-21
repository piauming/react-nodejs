import React, { useEffect } from "react";
import { Link, useOutlet, useNavigate } from "react-router-dom";

const HomeLayout = () => {
    const outlet = useOutlet();
    const navigate = useNavigate();

    useEffect(() => {
        if (!outlet) {
            navigate("main", { replace: true });
        }
    }, []);

    return (
        <div>
            <div>
                <ul className='top-nav'>
                    <Link to='main'>Home</Link>
                    <Link to='notifications'>Notifications</Link>
                    <Link to='/'>Logout</Link>
                </ul>
            </div>
            <div>
                {outlet}
            </div>
        </div>
    );
}

export default HomeLayout;