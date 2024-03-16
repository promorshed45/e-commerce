import { FaHeart } from "react-icons/fa";


const Card = () => {
    return (
        <>

            {cardInfo.slice(0,4).map((info, i) => 
                <a key={i} href="#" className="group relative block  bg-sky-500">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                    <span className="sr-only">Wishlist</span>
                    <FaHeart className="text-rose-500" />
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
                        <button
                            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                        >
                            Add to Cart
                        </button>
                    </form>
                </div>
            </a>
            )}


            
        </>
    );
};

export default Card;

const cardInfo = [
    {
        "image": "https://i.ibb.co/6rCNyq8/apartment.jpg",
        "title": "Smartphone X",
        "category": "Electronics",
        "price": 599.99
    },
    {
        "image": "https://i.ibb.co/2YNgy7F/master-bedroom-interior-design-bd.jpg",
        "title": "Men's Leather Jacket",
        "category": "Clothing",
        "price": 149.99
    },
    {
        "image": "https://i.ibb.co/5jy9XQ3/1542613324-BR0-Lf.jpg",
        "title": "Kitchen Mixer",
        "category": "Home & Kitchen",
        "price": 129.99
    },
    {
        "image": "https://i.ibb.co/Xj4753g/5.jpg",
        "title": "The Great Gatsby",
        "category": "Books",
        "price": 12.99
    },
    {
        "image": "https://example.com/product5.jpg",
        "title": "LEGO Star Wars Millennium Falcon",
        "category": "Toys & Games",
        "price": 159.99
    },
    {
        "image": "https://example.com/product6.jpg",
        "title": "Outdoor Camping Tent",
        "category": "Sports & Outdoors",
        "price": 199.99
    },
    {
        "image": "https://example.com/product7.jpg",
        "title": "Wireless Headphones",
        "category": "Electronics",
        "price": 79.99
      },
      {
        "image": "https://example.com/product8.jpg",
        "title": "Women's Floral Dress",
        "category": "Clothing",
        "price": 59.99
      },
      {
        "image": "https://example.com/product9.jpg",
        "title": "Stainless Steel Cookware Set",
        "category": "Home & Kitchen",
        "price": 199.99
      },
      {
        "image": "https://example.com/product10.jpg",
        "title": "The Catcher in the Rye",
        "category": "Books",
        "price": 9.99
      },
      {
        "image": "https://example.com/product11.jpg",
        "title": "Remote Control Car",
        "category": "Toys & Games",
        "price": 49.99
      },
      {
        "image": "https://example.com/product12.jpg",
        "title": "Yoga Mat",
        "category": "Sports & Outdoors",
        "price": 29.99
      }
]
