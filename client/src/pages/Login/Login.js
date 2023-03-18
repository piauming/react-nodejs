import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        //rewrite current page in history with the target page
        // navigate('/home', { replace: true }); 
        navigate('/home'); 
    }

    return (
        <div>
            <p>Login</p>
            <div onClick={loginHandler}>Submit</div>
        </div>
    );
}

export default Login;