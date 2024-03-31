import React from 'react';




const Title = ({title}) => {
    return (
        <div className='py-5 my-10 px-10 bg-gray-200 flex justify-between'>
            <h1 className='text-rose-500 text-4xl font-bold'> {title} Collection </h1>
            <button className='px-3 py-1 bg-rose-500 text-white rounded-md font-semibold'> View More </button>
        </div>
    );
};

export default Title;