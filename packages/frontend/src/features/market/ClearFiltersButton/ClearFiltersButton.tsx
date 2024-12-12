import { FC } from 'react';
import { useProductStore } from 'src/shared/store/productStore/productStore';

const ClearFiltersButton: FC = () => {
  const clearFilters = useProductStore((state) => state.clearFilters);
  return <button onClick={clearFilters}>Очистить</button>;
};
export default ClearFiltersButton;
