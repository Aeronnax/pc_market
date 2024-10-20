import React, { FC } from 'react';
import { useCartStore } from '../../shared/store/cart';
import Image from 'next/image';

const CartPage: FC = () => {
  const { cart, clearCart, removeFromCart } = useCartStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
    removeFromCart: state.removeFromCart,
  }));

  if (cart.length === 0) {
    return (
      <div>
        <h2>Корзина</h2>
        <p>Корзина пуста</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Корзина</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
              {item.name} - {item.quantity} шт. - {item.price} ₸
              <button onClick={() => removeFromCart(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>Очистить корзину</button>
      </div>
    </div>
  );
};

export default CartPage;
