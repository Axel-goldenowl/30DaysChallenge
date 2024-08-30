import { AxiosResponse } from 'axios';

import { IGetProductsResponse } from "@/interfaces";

import { instance as axiosClient } from '@/config';

export const apiGetProducts = async (start: number, limit: number): Promise<IGetProductsResponse> => {
  try {
    const response: AxiosResponse<IGetProductsResponse> = await axiosClient.get('/products', {
      params: {
        _start: start,
        _limit: limit
      }
    });
   return {
    data: response.data,
    status: response.status
  };
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
