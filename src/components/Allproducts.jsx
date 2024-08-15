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

    const axiosPublic = useAxiosPublic();


    const { data: Allproducts = [] } = useQuery({
        queryKey: ['Allproducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    })

    console.log(Allproducts);

    const product={
        search,
        brand,
        category,
        sort,
        date
    }



    return (
        <div>
            <div className="my-2 bg-[#f2f2f2]">
                <p className="px-3 py-2 font-bold">Laptop Price in Bangladesh</p>
            </div>
            <div className="my-2 bg-[#f2f2f2] p-2 items-center flex gap-5">
                <div>
                    <span >Search: </span>
                    <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder="search by product name" className="px-4 py-3 border-gray-500 border rounded-md" />
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
                        <select
                            onChange={e => setSort(e.target.value)}

                            className="select text-black border-gray-500" name="category" id='category' value={sort}>
                            <option disabled selected> Price</option>
                            <option>Low to high</option>
                            <option>High to low</option>
                            
                        </select>
                    </span>
                </div>

                <div className="flex justify-center items-center gap-2">
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
                </div>
            </div>
            <div className="my-2 bg-[#f2f2f2]">
                <p className="px-3 py-2 font-bold">Best Laptop for you</p>
            </div>


            <div className="flex flex-wrap justify-evenly py-10 mt-4 mb-10 bg-[#f2f2f2]">
            {
                Allproducts.map(product=> <Card key={product._id} product={product}></Card>)
            }
            </div>
        </div>
    );
};

export default Allproducts;