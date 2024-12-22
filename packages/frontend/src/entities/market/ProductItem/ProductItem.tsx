import React, { FC } from 'react';
import Styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Components.Schemas.ProductDTO;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={Styles.wrapper}>
      {/* TODO: Подключить изображения на бэке и на фронте */}
      <div style={{ width: 100, height: 100, backgroundColor: 'gray' }} />
      <h3 className={Styles.productName}>{product.name}</h3>
      {/* TODO: добавить отображение числа с разделением разрядов пробелами */}
      <p className={Styles.productPrice}>{product.price} ₸</p>
    </div>
  );
};

export default ProductItem;
