import { FC } from 'react';
import Styles from './CartItemsList.module.scss';
import Image from 'next/image';
import { ProductWithQuantity } from '../../../shared/store/cart/types';

interface CartItemsListProps {
  cart: ProductWithQuantity[];
}

const CartItemsList: FC<CartItemsListProps> = ({ cart }) => {
  if (cart.length === 0) {
    return <p>Корзина пуста</p>;
  }
  return (
    <ul className={Styles.list}>
      {cart.map((item) => (
        <li key={item.id} className={Styles.item}>
          <Image src={item.image} alt={item.name} width={100} height={100} />
          {item.name} - {item.quantity} шт. x {item.price} ₸
        </li>
      ))}
    </ul>
  );
};

export default CartItemsList;
