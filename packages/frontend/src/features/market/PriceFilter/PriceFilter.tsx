import React, { FC } from 'react';

interface PriceFilterProps {
  value: [number | undefined, number | undefined] | undefined;
  onChange: (priceRange?: [number | undefined, number | undefined]) => void;
}

const PriceFilter: FC<PriceFilterProps> = ({ value, onChange }) => {
  const minPrice = value?.[0];
  const maxPrice = value?.[1];

  const handlePriceChange =
    (type: 'min' | 'max') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;

      if (value.trim() === '') {
        onChange(
          type === 'min' ? [undefined, maxPrice] : [minPrice, undefined]
        );
        return;
      }

      const numValue = Number(value);
      if (Number.isNaN(numValue)) {
        return;
      }
      onChange(type === 'min' ? [numValue, maxPrice] : [minPrice, numValue]);
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
