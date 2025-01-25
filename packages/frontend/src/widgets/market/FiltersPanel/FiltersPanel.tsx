import React, {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import CategoryFilter from 'src/features/market/CategoryFilter/CategoryFilter';
import PriceFilter from 'src/features/market/PriceFilter/PriceFilter';
import { MarketFilters } from './types';
import { useFilterOnUrl } from './helpers';
import { useDebounce } from 'src/shared/helpers/useDebounce';

interface FiltersPanelProps {
  filters: MarketFilters;
  setFilters: Dispatch<SetStateAction<MarketFilters>>;
}
const FiltersPanel: FC<FiltersPanelProps> = ({ filters, setFilters }) => {
  useFilterOnUrl({
    value: filters,
    onChange: setFilters,
  });

  const [localFilters, setLocalFilters] = useState(filters);
  const debouncedFilters = useDebounce(localFilters, 1000, (value) => value);

  useEffect(() => {
    if (filters === debouncedFilters) {
      return;
    }
    setFilters(debouncedFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilters]);
  useEffect(() => {
    if (filters === localFilters) {
      return;
    }
    setLocalFilters(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleChangeFilters =
    <TKey extends keyof MarketFilters>(key: TKey) =>
    (newValue: MarketFilters[TKey]) => {
      setLocalFilters((prev) => ({ ...prev, [key]: newValue }));
    };

  const handleClearButton = (): void => {
    setFilters({});
  };

  return (
    <div>
      <h3>Фильтры</h3>

      <CategoryFilter
        value={localFilters.categoryId}
        onChange={handleChangeFilters('categoryId')}
      />

      <PriceFilter
        value={localFilters.priceRange}
        onChange={handleChangeFilters('priceRange')}
      />
      <button onClick={handleClearButton}>Очистить</button>
    </div>
  );
};

export default FiltersPanel;
