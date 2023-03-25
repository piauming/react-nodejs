import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { isEmpty } from "lodash";
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth'
import './Login.css';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~`]).{8,}$/;

const Login = (props) => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [err, setErr] = useState(null);

    // useEffect(() => {
    //     setValidPwd(PWD_REGEX.test(pwd));
    // }, [pwd])

    const loginHandler = (e) => {
        e.preventDefault();

        if (!PWD_REGEX.test(pwd)) {
            setErr("Password needs to be min 8 characters with at least 1 uppercase and 1 lower case alphabet, 1 digit, and 1 special character");
            return;
        }

        const input = {
            email: email,
            password: pwd
        }

        // const input = {
        //     email: 'super_admin@test.com',
        //     password: 'Abcd123$'
        // }

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
                alert("You have entered an invalid username or password");
            });
        
        setErr(null);
    }

    return (
        <div className="login-container">
            <section>
                <div className="login-page">
                {err && <p className="err">{err}</p>}
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
                                // required
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                // required 
                                value={pwd}
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