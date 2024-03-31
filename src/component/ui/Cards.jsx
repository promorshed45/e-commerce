


import React, { useEffect } from 'react';

const Cards = () => {
    useEffect((() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => console.log(data))
    }),[])
    return (
        <div>
            
        </div>
    );
};

export default Cards;