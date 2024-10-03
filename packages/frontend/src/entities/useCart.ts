import { useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Игровой ноутбук',
      price: 300000,
      image: '/images/laptop.png',
    },
    {
      id: '2',
      name: 'Механическая клавиатура',
      price: 50000,
      image: '/images/keyboard.png',
    },
  ]);

  const addItemToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return {
    cartItems,
    addItemToCart,
    addToCart,
  };
};
