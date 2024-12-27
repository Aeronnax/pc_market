import React, { FC, Dispatch, SetStateAction } from 'react';
import CategoryFilter from 'src/features/market/CategoryFilter/CategoryFilter';
import PriceFilter from 'src/features/market/PriceFilter/PriceFilter';
import { MarketFilters } from './types';

interface FiltersPanelProps {
  filters: MarketFilters;
  setFilters: Dispatch<SetStateAction<MarketFilters>>;
}
const FiltersPanel: FC<FiltersPanelProps> = ({ filters, setFilters }) => {
  const handleChangeFilters =
    <TKey extends keyof MarketFilters>(key: TKey) =>
    (newValue: MarketFilters[TKey]) => {
      setFilters((prev) => ({ ...prev, [key]: newValue }));
    };

  const handleClearButton = (): void => {
    setFilters({});
  };

  return (
    <div>
      <h3>Фильтры</h3>
      <CategoryFilter
        value={filters.categoryId}
        onChange={handleChangeFilters('categoryId')}
      />
      <PriceFilter
        value={filters.priceRange}
        onChange={handleChangeFilters('priceRange')}
      />
      <button onClick={handleClearButton}>Очистить</button>
    </div>
  );
};

export default FiltersPanel;
