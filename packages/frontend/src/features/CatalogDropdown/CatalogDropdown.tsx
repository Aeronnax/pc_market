import React, { useState, FC } from 'react';
import Styles from './CatalogDropdown.module.scss';
import { Category } from 'src/features/CatalogMenu/types';

interface CatalogDropdownProps {
  categories: Category[];
}

const CatalogDropdown: FC<CatalogDropdownProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const handleMouseEnter = (index: number): void => {
    setActiveCategory(index);
  };

  const handleMouseLeave = (): void => {
    setActiveCategory(null);
  };

  return (
    <div className={Styles.dropdown}>
      <ul className={Styles.categoryList}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={Styles.categoryItem}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{category.name}</span>
            {activeCategory === index && (
              <ul className={Styles.subcategoryList}>
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className={Styles.subcategoryItem}>
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogDropdown;
