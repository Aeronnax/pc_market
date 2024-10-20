import React, { FC } from 'react';
import { useCartStore, Product } from '../../shared/store/cart';
import Styles from './AddToCartButton.module.scss';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <button className={Styles.addToCartButton} onClick={handleAdd}>
      Добавить в корзину
    </button>
  );
};

export default AddToCartButton;
