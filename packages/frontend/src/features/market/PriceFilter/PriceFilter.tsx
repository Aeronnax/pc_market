import React, { FC } from 'react';
import { NumberInput } from '@mantine/core';

interface PriceFilterProps {
  value: [number | undefined, number | undefined] | undefined;
  onChange: (priceRange?: [number | undefined, number | undefined]) => void;
}

const PriceFilter: FC<PriceFilterProps> = ({ value, onChange }) => {
  const minPrice = value?.[0];
  const maxPrice = value?.[1];

  const handlePriceChange =
    (type: 'min' | 'max') => (value: string | number | undefined) => {
      if (value === undefined || value === '') {
        onChange(
          type === 'min' ? [undefined, maxPrice] : [undefined, minPrice]
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

      <NumberInput
        value={minPrice ?? ''}
        onChange={handlePriceChange('min')}
        placeholder="Минимальная цена"
        hideControls
        allowNegative={false}
      />
      <NumberInput
        value={maxPrice ?? ''}
        onChange={handlePriceChange('max')}
        placeholder="Максимальная цена"
        hideControls
        allowNegative={false}
      />
    </div>
  );
};

export default PriceFilter;
