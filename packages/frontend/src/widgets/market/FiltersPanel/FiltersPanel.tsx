import React, { FC } from 'react';
import CategoryFilter from '../../../features/market/CategoryFilter/CategoryFilter';
import PriceFilter from '../../../features/market/PriceFilter/PriceFilter';
import ClearFiltersButton from '../../../features/market/ClearFiltersButton/ClearFiltersButton';

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
