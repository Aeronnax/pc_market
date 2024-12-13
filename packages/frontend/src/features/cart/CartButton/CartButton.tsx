import React, { useState, FC, useMemo } from 'react';
import Styles from './CartButton.module.scss';
import { useCartStore } from 'src/shared/store/cart';
import CartIcons from 'src/shared/icons/CartIcons';
import CartItemsList from 'src/entities/cart/CartItemsList/CartItemsList';
import Link from 'next/link';

const CartButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart, totalPrice } = useCartStore((state) => state);

  const totalQuantity = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return (
    <div
      className={Styles.cartIcon}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={Styles.cartCount}>{totalQuantity}</div>
      <Link href={'/cart'} className={Styles.cartSvgIcon}>
        <CartIcons />
      </Link>
      {isOpen && (
        <div className={Styles.cartModal}>
          <h3>Корзина</h3>
          <CartItemsList cart={cart} />
          <div className={Styles.totalPrice}>
            <strong>Общая стоимость:</strong> {totalPrice} ₸
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
