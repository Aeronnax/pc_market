import React, { FC } from 'react';
import Styles from './ProductItem.module.scss';
import Image from 'next/image';
import { Product } from '../../../shared/api/products/types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <Image src={product.image} alt={product.name} width={100} height={100} />
      <h3 className={Styles.productName}>{product.name}</h3>
      <p className={Styles.productPrice}>{product.price} ₸</p>
    </div>
  );
};

export default ProductItem;
