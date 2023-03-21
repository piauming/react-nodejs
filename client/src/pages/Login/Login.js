import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { isEmpty } from "lodash";
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth'
import './Login.css';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~`]).{8,}$/;

// const email = 'super_admin@test.com';
// const password = 'Abcd123$';

const Login = (props) => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(true);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])

    const loginHandler = (e) => {
        e.preventDefault();

        const input = {
            email: email,
            password: pwd
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

    return (
        <div className="login-container">
            <section>
                <div className="login-page">
                    <div className="form">
                        <div className="login">
                            <div className="login-header">
                                <h3>LOGIN</h3>
                                <p>Please enter your credentials to login.</p>
                            </div>
                        </div>
                        <form className="login-form" onSubmit={loginHandler}>
                            <input 
                                type="text" 
                                placeholder="email" 
                                required 
                                autoComplete="off" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="password" 
                                required value={pwd} 
                                onChange={(e) => setPwd(e.target.value)}
                                />
                            <button>login</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;