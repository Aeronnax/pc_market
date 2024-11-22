import { createStore } from 'zustand';
import { ProductWithQuantity, Product } from './types';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartState {
  cart: ProductWithQuantity[];
  totalPrice: number;
}

export interface CartActions {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  calculateTotalPrice: () => void;
}

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...initState,
        addToCart: (product) =>
          set((state) => {
            const existingProduct = state.cart.find(
              (item) => item.id === product.id
            );
            if (!existingProduct) {
              return {
                ...state,
                cart: [...state.cart, { ...product, quantity: 1 }],
              };
            }

            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }),
        removeFromCart: (id) =>
          set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            return {
              ...state,
              cart: updatedCart,
            };
          }),
        clearCart: () => set((state) => ({ ...state, cart: [] })),
        calculateTotalPrice: () =>
          set((state) => {
            const total = state.cart.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            );
            return {
              ...state,
              totalPrice: total,
            };
          }),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
