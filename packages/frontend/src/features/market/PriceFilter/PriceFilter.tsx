import React, { FC } from 'react';
import { useProductStore } from '../../../shared/store/productStore/productStore';

const PriceFilter: FC = () => {
  const setPriceFilter = useProductStore((state) => state.setPriceFilter);
  const { priceRange } = useProductStore((state) => state.filters);
  const minPrice = priceRange?.[0];
  const maxPrice = priceRange?.[1];

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = Number(e.currentTarget.value);
    if (Number.isNaN(min)) {
      return;
    }
    setPriceFilter([min, maxPrice]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = Number(e.currentTarget.value);
    if (Number.isNaN(max)) {
      return;
    }
    setPriceFilter([minPrice, max]);
  };

  return (
    <div>
      <h4>Цена</h4>
      <input
        type="number"
        value={minPrice ?? ''}
        onChange={handleMinChange}
        placeholder="Минимальная цена"
      />
      <input
        type="number"
        value={maxPrice ?? ''}
        onChange={handleMaxChange}
        placeholder="Максимальная цена"
      />
    </div>
  );
};

export default PriceFilter;
