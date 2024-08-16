import { useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Allproducts = () => {
    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [date, setDate] = useState('');
    const [page, setPage] = useState(1);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const axiosPublic = useAxiosPublic();


    const { data: Allproducts = [] } = useQuery({
        queryKey: ['Allproducts', search, brand, category, sort, page, minPrice, maxPrice],
        queryFn: async () => {
            const res = await axiosPublic.get('/products', {
                params: {
                    search,
                    brand,
                    category,
                    sort,
                    page,
                    minPrice,
                    maxPrice,
                }
            });
            return res.data;
        }
    })


    const product = {
        search,
        brand,
        category,
        sort,
        date,
        page,
        minPrice,
        maxPrice
    }



    const { products, totalPages, currentPage } = Allproducts;



    return (
        <div>
            <div className="my-2 bg-[#f2f2f2] flex justify-between items-center">
                <p className="px-3 py-2 font-bold">Laptop Price in Bangladesh</p>


                <div className="flex gap-5 items-center py-2">
                    <p className="font-bold">Price Range</p>
                    <div className="flex items-center gap-2">
                        <span >Min: </span>
                        <input onChange={(e) => setMinPrice(e.target.value)} value={minPrice} type="text" placeholder="Add min price" className="px-4 py-3 border-gray-500 border rounded-md" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span >Max: </span>
                        <input onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} type="text" placeholder="add max price" className="px-4 py-3 border-gray-500 border rounded-md" />
                    </div>
                </div>
            </div>
            <div className="my-2 bg-[#f2f2f2] p-2 items-center flex justify-evenly gap-5">
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
                            <option>TechSlim</option>
                            <option>GameForce</option>
                            <option>ProBook</option>
                            <option>FlexTech</option>
                            <option>EduBook</option>
                            <option>Apple</option>
                            <option>ChromeTech</option>
                            <option>UltraLite</option>
                            <option>WorkPro</option>
                            <option>BudgetTech</option>
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
                            <option>Portable Devices</option>
                            <option>Gaming</option>
                            <option>Office</option>
                            <option>Convertible</option>
                            <option>Education</option>
                            <option>Premium</option>
                            <option>Budget</option>
                            <option>Ultra Slim</option>
                            <option>Workstation</option>
                            <option>Economy</option>
                        </select>
                    </span>
                </div>


                <div className="flex justify-center items-center gap-2">
                    <span>Sort:</span>
                    <span>
                        {/* <select
                            onChange={e => setSort(e.target.value)}

                            className="select text-black border-gray-500" name="category" id='category' value={sort}>
                            <option disabled selected> Price</option>
                            <option>Low to high</option>
                            <option>High to low</option>

                        </select> */}

                        <select className="select text-black border-gray-500" name="category" id='category' onChange={(e) => setSort(e.target.value)}>
                            <option value="">Sort by</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="newestFirst">Date: Newest First</option>
                            <option value="oldestFirst">Date: Oldest First</option>
                        </select>
                    </span>
                </div>

                {/* <div className="flex justify-center items-center gap-2">
                    <span>Date</span>
                    <span>
                        <select
                            onChange={e => setDate(e.target.value)}

                            className="select text-black border-gray-500" name="category" id='category' value={date}>
                            <option disabled selected> Price</option>
                            <option>Regular</option>
                            <option>Newest</option>

                        </select>
                    </span>
                </div> */}
            </div>
            <div className="my-2 bg-[#f2f2f2]">
                <p className="px-3 py-2 font-bold">Best Laptop for you</p>
            </div>


            <div className="flex flex-wrap justify-evenly py-10 mt-4 mb-10 bg-[#f2f2f2]">
                {
                    Allproducts.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>


            <div className="flex justify-center">
                <button disabled={currentPage <= 1} onClick={() => setPage(page - 1)}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Allproducts;