import React, { FC } from 'react';
import ProductItem from 'src/entities/market/ProductItem/ProductItem';
import AddToCartButton from 'src/features/cart/AddToCartButton/AddToCartButton';
import Styles from './ProductItemsModule.module.scss';
import { isExist } from 'src/shared/helpers/isExist';

interface ProductItemModuleProps {
  items: Components.Schemas.ProductDTO[] | undefined;
  isLoading: boolean;
}
const ProductItemsModule: FC<ProductItemModuleProps> = ({
  items,
  isLoading,
}) => {
  if (!isExist(items) || isLoading) {
    return <p>Загрузка...</p>;
  }
  if (items.length === 0) {
    return <p>Нет данных</p>;
  }
  return (
    <div className={Styles.grid}>
      {items.map((item) => (
        <div className={Styles.productItem} key={item.id}>
          <ProductItem product={item} />
          <AddToCartButton product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductItemsModule;
