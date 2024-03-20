import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import Menu from '../Menu';
import Footer from '../Footer';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Menu/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;