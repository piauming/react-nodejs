import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setLoginUser } from '../../redux/actions';
import { isEmpty } from "lodash";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => { return state.user });

    const loginHandler = (e) => {
        e.preventDefault();
        const payload = { "token": "abc123" }
        dispatch(setLoginUser(payload));
    }

    useEffect(() => {
        if (!isEmpty(user)) {
            return navigate('/home');
        }
    }, [user]);

    return (
        <div>
            <p>Login</p>
            <div onClick={loginHandler}>Submit</div>
        </div>
    );
}

export default Login;