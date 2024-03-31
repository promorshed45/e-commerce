import { useEffect, useState } from "react";





const User = () => {
    const [users,setUsers] = useState([]);

    useEffect((()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        console.log(users);
    }),[])

    return (
        <div className="px-20">
            {/* <p className="text-rose-500 text-xl">{user.length}</p> */}

           <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

           {users.map((user, i) => (
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1 w-full">
                        <h2 className="text-xl font-semibold sm:text-2xl"> {user.name} </h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600"> {user.email} </p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600"> {user.phone} </p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600"> {user.website} </p>
                    </div>
                    
                    <div className="bg-gray-200">
                        <h1 className="text-rose-500 font-semibold py-2"> Company Information </h1>
                        <p> {user.company.name} </p>
                    </div>

                    <div className="bg-gray-200">
                        <h1 className="text-rose-500 font-semibold py-2"> Address  </h1>
                        <p> {user.address.street} </p>
                        <p> {user.address.city} </p>
                        <p> {user.address.zipcode} </p>
                        <p> {user.address.geo.lat} </p>
                    </div>
                </div>
            </div>
            ))}
           </div>
        </div>
    );
};

export default User;