import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen pt-12" style={{ backgroundImage: `url(https://i.ibb.co/BB6BQ7f/authentication.png)` }}>
                <div className="lg:flex w-[80%] m-auto items-center justify-center shadow-2xl shadow-gray-500 py-8 px-4 lg:px-24 gap-20">
                    <div className="lg:w-[50%] flex justify-center items-center">
                    <Link to='/'><img src="https://i.ibb.co/D9bVMK9/authentication2.png" alt="" /></Link>
                    </div>
                    <div className="lg:w-[50%]">
                        <p className="text-2xl font-bold text-center my-8">Login</p>

                        <form>

                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Email</p>
                                    <input type="email" name="email" required placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Password</p>
                                    <input type="text" name="password" required placeholder="Enter your password" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>

                            <button type="submit" className=" w-full h-12 rounded-lg text-white bg-[#d1a054]">Sign In</button>




                        </form>
                        <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">New here? <Link to='/signUp'>Create a New Account</Link></p>
                        <p className="font-medium  text-center mb-3">Or sign in with</p>
                        <div className="flex justify-evenly">

                            <button><FaGoogle className="text-2xl" /></button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;