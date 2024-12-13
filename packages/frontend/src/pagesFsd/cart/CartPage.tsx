import React, { FC } from 'react';
import Styles from './cartPage.module.scss';
import { useCartStore } from 'src/shared/store/cart';
import { useRouter } from 'next/router';
import CartItem from 'src/entities/cart/CartItem/CartItem';

const CartPage: FC = () => {
  const { cart, totalPrice, removeFromCart, clearCart } = useCartStore(
    (state) => state
  );
  const { back } = useRouter();

  if (cart.length === 0) {
    return (
      <div className={Styles.cartPage}>
        <h2>Корзина</h2>
        <button onClick={back}>Назад</button>
        <p className={Styles.emptyCart}>Корзина пуста</p>
      </div>
    );
  }

  return (
    <div className={Styles.cartPage}>
      <h2>Корзина</h2>
      <button onClick={back}>Назад</button>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
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
