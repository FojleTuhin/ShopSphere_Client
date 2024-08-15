import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div className="">
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;