import React, { FC, useEffect } from 'react';
import Styles from './cartPage.module.scss';
import { useCartStore } from '../../shared/store/cart';
import Image from 'next/image';

const CartPage: FC = () => {
  const { cart, totalPrice, removeFromCart, clearCart, calculateTotalPrice } =
    useCartStore((state) => state);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart, calculateTotalPrice]);

  if (cart.length === 0) {
    return (
      <div className={Styles.cartPage}>
        <h2>Корзина</h2>
        <p className={Styles.emptyCart}>Корзина пуста</p>
      </div>
    );
  }

  return (
    <div className={Styles.cartPage}>
      <h2>Корзина</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className={Styles.cartItem}>
            <div className={Styles.imageCart}>
              <Image src={item.image} alt={item.name} width={80} height={80} />
            </div>
            <div className={Styles.itemDetails}>
              <div className={Styles.itemName}>{item.name}</div>
              <div className={Styles.itemPricePerUnit}>
                Цена за штуку: {item.price} ₸
              </div>
              <div className={Styles.itemQuantity}>{item.quantity} шт.</div>
            </div>
            <div className={Styles.itemTotalPrice}>
              {item.price * item.quantity} ₸
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className={Styles.clearButton}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <div className={Styles.cartSummary}>
        <div className={Styles.totalPrice}>Общая стоимость: {totalPrice} ₸</div>
        <button onClick={clearCart} className={Styles.clearCartButton}>
          Удалить все
        </button>
        <button className={Styles.checkoutButton}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default CartPage;
