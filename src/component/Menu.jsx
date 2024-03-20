import React from 'react';
import { LuHome, LuShoppingBag } from 'react-icons/lu';
import { MdOutlineEventNote } from "react-icons/md";
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <nav aria-label="breadcrumb" className="w-full px-10 md:px-20 py-5  shadow-sm dark:bg-gray-800 dark:text-gray-100">
            <ol className="flex h-8 space-x-2">
                <li className="flex items-center">
                    <Link to="/" title="Back to homepage" className="hover:underline">
                    <LuHome className='text-2xl' />
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600">Home</Link>
                </li>
                <li className="flex items-center space-x-2">
                <LuShoppingBag className='text-2xl' />
                    
                    <Link to="/shop" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600">Shops</Link>
                </li>
                <li className="flex items-center space-x-2">
                <MdOutlineEventNote className='text-2xl' />
                    <Link to="/category" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600 cursor-default"> Category</Link>
                </li>
            </ol>
        </nav>
    );
};

export default Menu;