import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://shop-sphere-server-pied.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;