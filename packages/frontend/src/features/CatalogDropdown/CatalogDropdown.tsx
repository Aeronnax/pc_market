import { FC } from 'react';
import Styles from './CatalogDropdown.module.scss';

const CatalogDropdown: FC = () => {
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

  return (
    <div className={Styles.dropdown}>
      <ul className={Styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={Styles.categoryItem}>
            <span>{category.name}</span>
            <ul className={Styles.subcategoryList}>
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex} className={Styles.subcategoryItem}>
                  {subcategory}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogDropdown;
