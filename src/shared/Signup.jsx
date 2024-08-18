import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Signup = () => {



    const { createUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();




    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password or email don't match!",
                });
            })


    }




    const handleLSignIn = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;



        if (password.length < 6) {
            toast.error("Password must be 6 characters.");
            return
        }






        else (
            toast.success('Successfully Sign in!')

        )

        createUser(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully login",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state ? location.state : '/')


            })
            .catch(error => {
                console.log(error);
            })


    }



    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/BB6BQ7f/authentication.png)` }}>
                <div className="lg:flex lg:flex-row-reverse w-[80%] m-auto shadow-2xl shadow-gray-500 py-8 px-4 lg:px-24 gap-20">
                    <div className="lg:w-[50%] flex justify-center items-center">
                        <Link to='/'> <img src="https://i.ibb.co/ww94K10/authentication1-1.png" alt="" /></Link>
                    </div>
                    <div className="lg:w-[50%]">
                        <p className="text-2xl font-bold text-center mt-8 mb-8">Sign Up</p>

                        <form onSubmit={handleLSignIn}>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Name</p>
                                    <input type="text" name="name" placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>

                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Email</p>
                                    <input type="email" name="email" placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Photo</p>
                                    <input type="text" name="photo" placeholder="Photo URL" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Password</p>
                                    <input type="text" name="password" placeholder="Enter your password" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>

                            <button type="submit" className=" w-full h-12 rounded-lg text-white bg-[#d1a054]">Sign Up</button>




                        </form>
                        <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">Already registered? <Link to='/login'>Go to log in</Link></p>
                        <p className="font-medium  text-center mb-3">Or sign up with</p>
                        <div className="flex justify-evenly">

                            <button><FaGoogle onClick={handleGoogleLogin} className="text-2xl" /></button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;