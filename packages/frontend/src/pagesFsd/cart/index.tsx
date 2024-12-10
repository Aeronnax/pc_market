import React, { FC } from 'react';
import Styles from './cartPage.module.scss';
import { useCartStore } from '../../shared/store/cart';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
          <li key={item.id} className={Styles.cartItem}>
            {/* TODO: вынести в отдельный компонент */}
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
