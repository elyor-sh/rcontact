import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import {useAuth} from "../../lib";

const PrivatePages = () => {

    const {isAuth} = useAuth()

    return isAuth ? <Outlet /> : <Navigate to='/login' />
};

export {PrivatePages}