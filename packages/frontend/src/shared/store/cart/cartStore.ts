import { createStore } from 'zustand';
import { ProductWithQuantity, Product } from './types';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartState {
  cart: ProductWithQuantity[];
}
export interface CartActions {
  // TODO: Добавить возможность добавления нескольких элементов (опционально)
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  cart: [],
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
          set((state) => ({
            ...state,
            cart: state.cart.filter((item) => item.id !== id),
          })),
        clearCart: () => set((state) => ({ ...state, cart: [] })),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
