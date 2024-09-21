import React, { useState } from 'react';
import Styles from './CatalogDropdown.module.scss';

const CatalogDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Комплектующие',
      subcategories: ['Процессоры', 'Видеокарты', 'Материнские платы'],
    },
    {
      name: 'Периферия',
      subcategories: ['Клавиатуры', 'Мыши', 'Мониторы'],
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
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
                    {subcategory}
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
