import React, { useEffect, useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';




const ProductDetails = () => {
    const [singleCard, setSingleCard] = useState([]);
    const [quantity,setQuantity]= useState(0);

    const {title, price, description, category, image, rating } = singleCard;

    useEffect((() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(data => setSingleCard(data))
    }
    ), [])


    const handleAddProduct = () => {
                if(quantity < 5 ){
                    const addProduct = quantity + 1;
                setQuantity(addProduct);
                console.log(quantity);
    }
                }

    const handleMinusProduct = () => {
        if(quantity > 0 ){
             const addProduct = quantity - 1;
        setQuantity(addProduct);
        console.log(quantity);
        }
       
}


    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                
                <div class="container px-5 py-24 mx-auto">
                    <div class=" lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 pr-8 w-full h-[450px] object-cover object-center rounded" src={image}/>
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                       
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">  {title} </h1>
                            <div class="flex mb-4">
                                <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                            </div>
                            <p class="leading-relaxed mb-4"> {description}</p>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Color</span>
                                <span class="ml-auto text-gray-900">Blue</span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Size</span>
                                <span class="ml-auto text-gray-900">Medium</span>
                            </div>
                            <div class="flex border-t border-b mb-6 border-gray-200 py-2 items-center justify-between">
                                <span class="text-gray-500">Quantity</span>
                                <div className='flex items-center gap-5'>
                                    <button onClick={handleMinusProduct}><LuMinus /></button>
                                    <span class="ml-auto text-gray-900"> {quantity} </span>
                                    <button onClick={handleAddProduct}><LuPlus /></button>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">  Tk. {price} </span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now </button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;