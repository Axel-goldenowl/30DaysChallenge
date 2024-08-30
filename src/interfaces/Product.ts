export interface IProduct {
  name: string;
  price: number;
  sizes: number[];
  colors: number[];
}
export interface IProductLesson15  {
  id:string,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
      rate:number,
      count:number
  }
}
export interface IGetProductsResponse {
  data: IProductLesson15[];  
  status: number;            
}
