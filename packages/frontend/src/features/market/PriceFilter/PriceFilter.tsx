import React, { FC } from 'react';
import { NumberInput } from '@mantine/core';

type Value = [number | undefined | null, number | undefined | null];
interface PriceFilterProps {
  value: Value | undefined;
  onChange: (priceRange?: Value) => void;
}

const PriceFilter: FC<PriceFilterProps> = ({ value, onChange }) => {
  const minPrice = value?.[0];
  const maxPrice = value?.[1];

  const handlePriceChange =
    (type: 'min' | 'max') => (value: string | number | undefined) => {
      if (value === undefined || value === '') {
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
