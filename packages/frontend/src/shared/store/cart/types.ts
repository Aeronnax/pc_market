export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}
export interface ProductWithQuantity extends Product {
  quantity: number;
}
