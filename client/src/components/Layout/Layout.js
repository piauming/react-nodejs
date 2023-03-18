import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <Outlet />
        </div>
    );

}

export default Layout;