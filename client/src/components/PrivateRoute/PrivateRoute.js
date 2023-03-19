import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from '../../api/axios';

import useAuth from '../../hooks/useAuth'

const PrivateRoute = () => {
    // const auth = true; // determine if authorized, from context or however you're doing it

    const { auth } = useAuth();

    const foo = true;

    console.log("Private Route!!!");
    console.log("-- accessToken", auth.accessToken);

    // axios.post('/protected', JSON.stringify(input), headers)
    // .then((response) => {
    //     const accessToken = response?.data?.accessToken;
    //     console.log("accessToken", accessToken);
    //     setAuth({ username, password, accessToken });
    //     navigate("/home", { replace: true });

    // }, (error) => {
    //     console.log(error);
    //     setSuccess(false);
    // });


    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return foo ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;