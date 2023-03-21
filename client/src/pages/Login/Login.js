import React, { useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { isEmpty } from "lodash";
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth'

const email = 'super_admin@test.com';
const password = 'Abcd123$';

const Login = (props) => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        const input = {
            email: email,
            password: password
        }

        const headers = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }

        axios.post('/auth', JSON.stringify(input), headers)
            .then((response) => {
                const accessToken = response?.data?.accessToken;
                // setAuth({ email, password, accessToken });
                setAuth({ email, accessToken });
                navigate("/home", { replace: true });

            }, (error) => {
                console.log(error);
            });
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
            <Link to={{ }} onClick={loginHandler}>Login</Link>
        </div>
    );
}

export default Login;