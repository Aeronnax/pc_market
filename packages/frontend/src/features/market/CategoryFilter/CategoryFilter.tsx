import React, { FC, ChangeEventHandler, useState, useEffect } from 'react';
import { getCategories } from 'src/shared/api/products/products';
import { useProductStore } from 'src/shared/store/productStore/productStore';

const CategoryFilter: FC = () => {
  const setCategoryFilter = useProductStore((state) => state.setCategoryFilter);
  const { categoryId: category } = useProductStore((state) => state.filters);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = +event.currentTarget.value;
    if (Number.isNaN(value)) {
      return;
    }
    setCategoryFilter(value === -1 ? undefined : value);
  };

  const [categories, setCategories] = useState<
    Components.Schemas.CategoriesDTO[]
  >([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories([{ id: -1, name: 'Все' }, ...res.data.data]);
    });
  }, []);

  return (
    <div>
      <h4>Категории</h4>
      <select onChange={handleChange} value={category ?? 'Все'}>
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
