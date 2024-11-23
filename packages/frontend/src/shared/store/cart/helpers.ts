import { ProductWithQuantity } from './types';

export const calculateTotalPrice = (cart: ProductWithQuantity[]): number =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
