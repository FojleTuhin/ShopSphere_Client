import { BsCart3 } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from '../assets/1.jpg'
import { AuthContext } from "../firebase/FirebaseProvider";
import { useContext } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../hooks/useAxiosPublic";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const links = <>
        <li><a href=""><Link to='/'>Home</Link></a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Contact</a></li>

    </>
    // const axiosPublic = useAxiosPublic();

    // const { data: cart = [], refetch } = useQuery({
    //     queryKey: ['cart'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/cart');
    //         return res.data;
    //     }
    // })
    const handleSignOut = () => {

        logOut()
            .then(result => {
                console.log(result);
            })
            .catch()


    }



    return (
        <div className="max-w-6xl mx-auto pt-5 p-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className=""><img className="w-14 rounded-full" src={logo} alt="" /></a>
                    <p className="ml-2 font-bold md:text-2xl">ShopSphere</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <span className="flex"><BsCart3 className="text-2xl" /><sup>+5</sup></span>
                    {
                        user ?
                            <button onClick={handleSignOut}>Logout</button>
                            :
                            <Link to='/login'> <IoPersonAddOutline className="text-2xl" /></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;