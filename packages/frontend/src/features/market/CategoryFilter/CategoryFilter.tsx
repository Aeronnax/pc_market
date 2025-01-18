import React, { FC, useMemo } from 'react';
import { ComboboxItem, Select } from '@mantine/core';
import { useGetCategories } from 'src/shared/api/products/hooks/useGetCategories';

interface CategoryFilterProps {
  value: number | undefined;
  onChange: (newValue: number | undefined) => void;
}

const CategoryFilter: FC<CategoryFilterProps> = ({ value, onChange }) => {
  const { data } = useGetCategories();
  const categories = useMemo<ComboboxItem[]>(
    () => [
      { value: '-1', label: 'Все' },
      ...(data?.data.items.map((item) => ({
        value: String(item.id),
        label: item.name,
      })) ?? []),
    ],
    [data]
  );

  const handleChange = (selectedValue: string | null) => {
    if (selectedValue === null) {
      onChange(undefined);
      return;
    }

    const numericValue = Number(selectedValue);

    if (Number.isNaN(selectedValue)) {
      console.error('Некорректное значение:', selectedValue);
    }

    onChange(numericValue === -1 ? undefined : numericValue);
  };

  return (
    <div>
      <h4>Категории</h4>
      <Select
        data={categories}
        value={value !== undefined ? String(value) : '-1'}
        onChange={handleChange}
        placeholder="Выберите категорию"
        comboboxProps={{ withinPortal: true, zIndex: 1000 }}
      />
    </div>
  );
};

export default CategoryFilter;
