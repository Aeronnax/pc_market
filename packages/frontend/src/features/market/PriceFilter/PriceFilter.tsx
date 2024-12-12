import React, { FC } from 'react';
import { useProductStore } from 'src/shared/store/productStore/productStore';

const PriceFilter: FC = () => {
  const setPriceFilter = useProductStore((state) => state.setPriceFilter);
  const { priceRange } = useProductStore((state) => state.filters);
  const minPrice = priceRange?.[0];
  const maxPrice = priceRange?.[1];

  const handlePriceChange =
    (type: 'min' | 'max') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.currentTarget.value);
      if (Number.isNaN(value)) {
        return;
      }
      setPriceFilter(type === 'min' ? [value, maxPrice] : [minPrice, value]);
    };

  return (
    <div>
      <h4>Цена</h4>
      <input
        type="number"
        value={minPrice ?? ''}
        onChange={handlePriceChange('min')}
        placeholder="Минимальная цена"
      />
      <input
        type="number"
        value={maxPrice ?? ''}
        onChange={handlePriceChange('max')}
        placeholder="Максимальная цена"
      />
    </div>
  );
};

export default PriceFilter;
