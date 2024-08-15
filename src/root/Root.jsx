import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto pt-5 p-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;