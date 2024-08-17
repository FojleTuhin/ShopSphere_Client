import { useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Allproducts = () => {
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [page, setPage] = useState(1);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const axiosPublic = useAxiosPublic();




    const { data: { allProducts = [], totalPages, currentPage } = {}, isLoading } = useQuery({
        queryKey: ['allProducts', search, brand, category, sort, page, minPrice, maxPrice],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?search=${search}&brand=${brand}&category=${category}&sort=${sort}&page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return res.data;
        }
    });








    if (isLoading) {
        return (
            <div className="flex justify-center items-center ">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }





    return (
        <div>
            <div className="my-2 bg-[#f2f2f2] lg:flex justify-between items-center">
                <p className="px-3 py-2 font-bold text-center">Laptop Price in Bangladesh</p>


                <div className="md:flex gap-5 items-center justify-center py-2">
                    <p className="font-bold text-center mb-2 md:mb-0">Price Range</p>
                    <div className="flex items-center gap-2 py-2 md:py-0 justify-center">
                        <span >Min: </span>
                        <input onChange={(e) => setMinPrice(e.target.value)} value={minPrice} type="text" placeholder="Add min price" className="px-4 py-3 border-gray-500 border rounded-md" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span >Max: </span>
                        <input onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} type="text" placeholder="add max price" className="px-4 py-3 border-gray-500 border rounded-md" />
                    </div>
                </div>
            </div>
            <div className="my-2 bg-[#f2f2f2] p-2 items-center flex flex-wrap justify-evenly gap-5">
                <div className="flex items-center gap-2">
                    <span >Search: </span>
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="search by product name" className="px-4 py-3 border-gray-500 border rounded-md" />
                </div>

                <div className="flex justify-center items-center gap-2">
                    <span>Brand:</span>
                    <span>
                        <select
                            onChange={e => setBrand(e.target.value)}

                            className="select text-black border-gray-500" name="category" id='category' value={brand}>
                            <option disabled selected> Brand</option>
                            <option>Dell</option>
                            <option>Acer</option>
                            <option>Lenovo</option>
                            <option>Asus</option>
                            <option>Walton</option>
                            <option>Apple</option>
                            <option>HP</option>
                        </select>
                    </span>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <span>Category:</span>
                    <span>
                        <select
                            onChange={e => setCategory(e.target.value)}

                            className="select text-black border-gray-500" name="category" id='category' value={category}>
                            <option disabled selected> Category</option>
                            <option>Convertible</option>
                            <option>Ultrabook</option>
                            <option>Budget</option>
                            <option>Gaming</option>
                            <option>Business</option>
                            <option>Professional</option>
                            <option>Budget</option>

                        </select>
                    </span>
                </div>


                <div className="flex justify-center items-center gap-2">
                    <span>Sort:</span>
                    <span>


                        <select className="select text-black border-gray-500" name="category" id='category' onChange={(e) => setSort(e.target.value)}>
                            <option value="">Sort by</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="newestFirst">Date: Newest First</option>
                            <option value="oldestFirst">Date: Oldest First</option>
                        </select>
                    </span>
                </div>


            </div>
            <div className="my-2 bg-[#f2f2f2]">
                <p className="px-3 py-2 font-bold text-center">Best Laptop for you</p>
            </div>


            <div className="flex flex-wrap justify-evenly py-10 mt-4 mb-5 bg-[#f2f2f2]">
                {
                    allProducts.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>


            <div className="flex gap-10 justify-center bg-[#f2f2f2] py-2">
                <button disabled={currentPage <= 1} onClick={() => setPage(page - 1)}>Previous </button>
                <span> Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage >= totalPages} onClick={() => setPage(page + 1)}> Next</button>
            </div>
        </div>
    );
};

export default Allproducts;