import { createStore } from 'zustand';
import { ProductWithQuantity } from './types';
import { persist, createJSONStorage } from 'zustand/middleware';
import { calculateTotalPrice } from './helpers';

export interface CartState {
  cart: ProductWithQuantity[];
  totalPrice: number;
}

export interface CartActions {
  setCart: (newCart: ProductWithQuantity[]) => void;
  addToCart: (product: Components.Schemas.ProductDTO, count?: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      (set, get) => ({
        ...initState,
        setCart: (cart) => {
          set({
            cart,
            totalPrice: calculateTotalPrice(cart),
          });
        },

        addToCart: (product, count = 1) => {
          const state = get();

          const productIndex = state.cart.findIndex(
            (item) => item.id === product.id
          );

          if (productIndex === -1) {
            state.setCart([...state.cart, { ...product, quantity: count }]);
            return;
          }

          const updatedCart = [...state.cart];
          updatedCart[productIndex].quantity += count;

          state.setCart(updatedCart);
        },

        removeFromCart: (id) => {
          const state = get();

          const updatedCart = state.cart.filter((item) => item.id !== id);
          state.setCart(updatedCart);
        },
        clearCart: () => get().setCart([]),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
