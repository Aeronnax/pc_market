import { FC, useEffect } from 'react';
import MainTemplate from 'src/widgets/template/MainTemplate/MainTemplate';
import ProductItemsModule from 'src/widgets/market/ProductItemModule/ProductItemsModule';
import FiltersPanel from 'src/widgets/market/FiltersPanel/FiltersPanel';
import { useProductStore } from 'src/shared/store/productStore/productStore';

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
