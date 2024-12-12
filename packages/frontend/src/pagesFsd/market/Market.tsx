import { FC, useEffect } from 'react';
import MainTemplate from '../../widgets/template/MainTemplate/MainTemplate';
import ProductItemsModule from '../../widgets/market/ProductItemModule/ProductItemsModule';
import FiltersPanel from '../../widgets/market/FiltersPanel/FiltersPanel';
import { useProductStore } from '../../shared/store/productStore/productStore';

const Market: FC = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainTemplate>
      <FiltersPanel />
      <ProductItemsModule />
    </MainTemplate>
  );
};

export default Market;
