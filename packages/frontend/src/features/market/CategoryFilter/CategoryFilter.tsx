import React, { FC, ChangeEventHandler } from 'react';
import { useProductStore } from '../../../shared/store/productStore/productStore';
import { categories } from './types';
import { checkStrIsCategory } from './helpers';

const CategoryFilter: FC = () => {
  const setCategoryFilter = useProductStore((state) => state.setCategoryFilter);
  const { category } = useProductStore((state) => state.filters);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.currentTarget.value;
    if (!checkStrIsCategory(value)) {
      return;
    }
    setCategoryFilter(value === 'Все' ? undefined : value);
  };

  return (
    <div>
      <h4>Категории</h4>
      <select onChange={handleChange} value={category ?? 'Все'}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
