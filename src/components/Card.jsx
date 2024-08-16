import { FaRegStar } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ product }) => {

    const { price, brandName, ratings, category, description, productName, productImage, _id } = product;
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const email = user?.email;


    const handleAddToCart = (product) => {
        const { price, brandName, ratings, category, description, productName, productImage, _id } = product;

        const newCart = {
            price, brandName, ratings, category, description, productName, productImage, _id, email
        }

        if (!user) {
            return navigate('/login')
        }
        axiosPublic.post('/addToCart', newCart)
            .then(data => {
                if (data.status === 200) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "product added in chart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });


    }

    return (
        <div className="w-[300px] h-[400px] mt-5 bg-white">
            <div className="h-[180px] bg-cover relative">
                <img className="h-[180px] w-full bg-cover" src={productImage} alt="" />

                <span className="bg-black px-4 py-3 text-white absolute top-2 right-2">${price}</span>
            </div>
            <div className="px-4">
                <p className="text-center mt-2 font-bold"> {productName}</p>
                <div className="flex justify-between items-center font-bold py-2">
                    <span>Brand: {brandName}</span><span className="flex items-center gap-2"><FaRegStar />{ratings}</span>
                </div>

                <p className="mb-4">{description}</p>
                <div className="flex justify-center">
                    <button onClick={() => handleAddToCart(product)} className="bg-[#fceae8] px-6 p-4  border-b-[#FF136F] border-b-2 rounded-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;