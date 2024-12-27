import React, { FC, ChangeEventHandler, useMemo } from 'react';
import { useGetCategories } from 'src/shared/api/products/hooks/useGetCategories';

interface CategoryFilterProps {
  value: number | undefined;
  onChange: (newValue: number | undefined) => void;
}
const CategoryFilter: FC<CategoryFilterProps> = ({ value, onChange }) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = +event.currentTarget.value;
    if (Number.isNaN(value)) {
      return;
    }
    onChange(value === -1 ? undefined : value);
  };

  const { data } = useGetCategories();

  const categories = useMemo<Components.Schemas.CategoriesDTO[]>(
    () => [{ id: -1, name: 'Все' }, ...(data?.data.items ?? [])],
    [data]
  );

  return (
    <div>
      <h4>Категории</h4>
      <select onChange={handleChange} value={value ?? 'Все'}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
