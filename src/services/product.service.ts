import { apiGetProducts } from "@/apis";

export const getProducts = async ({ pageParam = 0 }) => {
  const { status, data } = await apiGetProducts(pageParam, 5);
  
  if (status === 200) {
    return {
      products: data,
      nextPage: data.length === 5 ? pageParam + 5 : undefined,
    };
  }

  return { products: [], nextPage: undefined };
};
