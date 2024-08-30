import { apiGetProducts } from "@/apis";

export const getProducts = async ({ pageParam = 0 }) => {
  try {
    const { status, data } = await apiGetProducts(pageParam, 10);
    if (status === 200) {
      return {
        products: data,
        nextPage: data.length === 10 ? pageParam + 10 : undefined,
      };
    }
    return { products: [], nextPage: undefined };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products');
  }
};
