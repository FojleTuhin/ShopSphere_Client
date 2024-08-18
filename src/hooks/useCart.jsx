import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../firebase/FirebaseProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const email = user?.email;

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/cart/${email}`);
            return res.data;
        }
    });
    return [cart, refetch];
};

export default useCart;