import React, { FC } from 'react';
import ProductItem from '../../../entities/market/ProductItem/ProductItem';
import AddToCartButton from '../../../features/AddToCartButton/AddToCartButton';
import Styles from './ProductItemModule.module.scss';
import gpu from './gpu.webp';
import { Product } from '../../../shared/store/cart';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Видеокарта 1',
    price: 85452,
    image: gpu.src,
  },
  {
    id: 2,
    name: 'Видеокарта 2',
    price: 45452,
    image: gpu.src,
  },
];
// TODO: Переименовать в  ProductItemsModule
interface ProductItemModuleProps {
  products?: Product[];
}
const ProductItemModule: FC<ProductItemModuleProps> = ({
  products = mockProducts,
}) => {
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

export default ProductItemModule;
