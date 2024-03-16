import React from 'react';
import { CiShop } from 'react-icons/ci';
import { LuBanknote, LuHome, LuList, LuScrollText, LuShoppingBag } from 'react-icons/lu';
import { MdOutlineEventNote } from "react-icons/md";


const Menu = () => {
    return (
        <nav aria-label="breadcrumb" className="w-full px-10 md:px-20 py-5  shadow-sm dark:bg-gray-800 dark:text-gray-100">
            <ol className="flex h-8 space-x-2">
                <li className="flex items-center">
                    <a rel="noopener noreferrer" href="#" title="Back to homepage" className="hover:underline">
                    <LuHome className='text-2xl' />
                    </a>
                </li>
                <li className="flex items-center space-x-2">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600">Home</a>
                </li>
                <li className="flex items-center space-x-2">
                <LuShoppingBag className='text-2xl' />
                    
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600">Shops</a>
                </li>
                <li className="flex items-center space-x-2">
                <MdOutlineEventNote className='text-2xl' />
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-1 font-semibold capitalize hover:underline hover:text-rose-600 cursor-default"> Category</a>
                </li>
            </ol>
        </nav>
    );
};

export default Menu;