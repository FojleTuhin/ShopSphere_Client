import { FaRegStar } from "react-icons/fa";

const Card = () => {
    return (
        <div className="w-[300px] h-[400px] mt-5 bg-white">
            <div className="h-[180px] bg-cover relative">
                <img className="" src="https://i.ibb.co/FV85h0q/macbook-air-13inch-m1-2020-8-64369a0ba97c4514b9446bdfe25be55d-grande.webp" alt="" />

                <span className="bg-black px-4 py-3 text-white absolute top-2 right-2">$2000</span>
            </div>
            <div className="px-4">
                <p className="text-center mt-2 font-bold"> Apple</p>
                <div className="flex justify-between items-center font-bold py-2">
                    <span>Category: Premium</span><span className="flex items-center gap-2"><FaRegStar />4.9</span>
                </div>

                <p className="mb-4">Cost-effective laptop with a 15.6-inch display, suitable for everyday use</p>
                <div className="flex justify-center">
                    <button className="bg-[#fceae8] px-6 p-4  border-b-[#FF136F] border-b-2 rounded-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;