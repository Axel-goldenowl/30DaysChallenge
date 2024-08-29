import { instance as axiosClient } from '@/config';

export const apiGetProducts = async () => {
  try {
    const response = await axiosClient.get('/products');
    return response 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
