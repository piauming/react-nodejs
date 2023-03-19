import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
                console.log("accessToken", accessToken);
                setAuth({ email, password, accessToken });
                navigate("/home", { replace: true });

            }, (error) => {
                console.log(error);
                setSuccess(false);
            });
    }

    return (
        <div>
            <p>Login</p>
            <div onClick={loginHandler}>Submit</div>
        </div>
    );
}

export default Login;