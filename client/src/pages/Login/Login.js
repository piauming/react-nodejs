import React, { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../context/AuthProvider";
import { isEmpty } from "lodash";
import axios from '../../api/axios';

const username = 'piauming';
const password = 'password';

const Login = (props) => {
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        const input = {
            user: username,
            pwd: password
            }

        const headers =  {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }    

        axios.post('/auth', JSON.stringify(input),  headers)
            .then((response) => {
                const accessToken = response?.data?.accessToken;
                console.log("accessToken", accessToken);
                setAuth({ username, password, accessToken });
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