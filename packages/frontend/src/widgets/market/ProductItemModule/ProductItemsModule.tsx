import React, { FC } from 'react';
import ProductItem from 'src/entities/market/ProductItem/ProductItem';
import AddToCartButton from 'src/features/cart/AddToCartButton/AddToCartButton';
import Styles from './ProductItemsModule.module.scss';
import { isExist } from 'src/shared/helpers/isExist';
import { useProductStore } from 'src/shared/store/productStore/productStore';

// interface ProductItemModuleProps {}
const ProductItemsModule: FC = () => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);

  if (!isExist(products) || isLoading) {
    return <p>Загрузка...</p>;
  }
  if (products.length === 0) {
    return <p>Нет данных</p>;
  }
  return (
    <div className={Styles.grid}>
      {products.map((item) => (
        <div className={Styles.productItem} key={item.id}>
          <ProductItem product={item} />
          <AddToCartButton product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductItemsModule;
