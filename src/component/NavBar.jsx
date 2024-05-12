import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="bg-white dark:bg-gray-900 sticky w-full h-16 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
                <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo"/>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Comerce</span>
                    </Link>

                    
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to="/register"><button>Login</button></Link>
                    </div>
                    
                    <div className=" items-center justify-between hidden w-full md:flex md:w-auto " id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/" className="block py-2 px-3 text-white bg-rose-500 rounded md:bg-transparent md:text-rose-500 md:p-0 md:dark:text-rose-500" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0 md:dark:hover:text-rose-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                </li>
                                <li>
                                    <Link to="/service" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0 md:dark:hover:text-rose-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0 md:dark:hover:text-rose-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/user" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0 md:dark:hover:text-rose-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Users</Link>
                                </li>
                            </ul>
                            
                        </div>
                   
                </div>
                
            </nav>

        </>
    );
}

export default NavBar;