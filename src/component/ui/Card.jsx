import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "./Title";




const Card = ({title}) => {
    const [cardInfo, setCardInfo] = useState([]);

    useEffect((() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setCardInfo(data))
    }
    ), [])

    return (
        <>

            <div className="px-10 md:px-20 py-10">
            <Title title={title}/>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {cardInfo.slice(0,4).map((info, i) => (
                        <Link key={i} href="#" className="group relative block">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <FaHeart className="text-rose-500" />
                                {/* {info.isFavourite ?  <FaHeart className="text-rose-500" /> : <FaHeart className="text-gray-500" />} */}
                                {/* <FaHeart className="text-rose-500" /> */}
                            </button>

                            <img
                                src={info.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white p-6">
                                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> {info.category} </span>

                                <h3 className="mt-4 text-lg font-medium text-gray-900"> {info.title} </h3>

                                <p className="mt-1.5 text-sm text-gray-700"> {info.price}</p>

                                <form className="mt-4">
                                    <Link to="/productDetails" >
                                    <button
                                        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                    </Link>
                                </form>
                            </div>
                        </Link>
                    ))}



                </div>
            </div>


        </>
    );
};

export default Card;

