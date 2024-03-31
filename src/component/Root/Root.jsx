




import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Menu from '../../component/Menu'
const Root = () => {
    return (
        <>
            <NavBar/>
            <Menu/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;