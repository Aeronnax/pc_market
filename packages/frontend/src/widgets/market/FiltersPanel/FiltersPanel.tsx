import React, { FC } from 'react';
import CategoryFilter from 'src/features/market/CategoryFilter/CategoryFilter';
import PriceFilter from 'src/features/market/PriceFilter/PriceFilter';
import ClearFiltersButton from 'src/features/market/ClearFiltersButton/ClearFiltersButton';

const FiltersPanel: FC = () => {
  return (
    <div>
      <h3>Фильтры</h3>
      <CategoryFilter />
      <PriceFilter />
      <ClearFiltersButton />
    </div>
  );
};

export default FiltersPanel;
