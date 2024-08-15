import { FaRegStar } from "react-icons/fa";

const Card = ({product}) => {
    const {price,brandName,ratings,category,description,productName,productImage} = product;
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
                    <button className="bg-[#fceae8] px-6 p-4  border-b-[#FF136F] border-b-2 rounded-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;