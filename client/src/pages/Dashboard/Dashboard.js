import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosWithCredentials from "../../hooks/useAxiosWithCredentials";

const Dashboard = (props) => {
    const [data, setData] = useState(null);
    const axiosWithCredentials = useAxiosWithCredentials();
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axiosWithCredentials.get('/dashboard');
                console.log(response.data);
                setData(response.data);
            } catch (err) {
                console.error(err);
                navigate("/login", { replace: true });
                // navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getData();

        return () => {}
    }, []);

    return (
        <div>
            <div>Dashboard</div>
            {data && <div>{data?.count}</div>}
        </div>
    );
}

export default Dashboard;