import React, { FC } from 'react';
import Styles from './cartItem.module.scss';
import Image from 'next/image';
import { ProductWithQuantity } from 'src/shared/store/cart/types';

interface CartItemProps {
  item: ProductWithQuantity;
  onRemove: (id: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <li className={Styles.cartItem}>
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
      <button onClick={() => onRemove(item.id)} className={Styles.clearButton}>
        Удалить
      </button>
    </li>
  );
};

export default CartItem;
