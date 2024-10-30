import React, { useState, FC, useRef } from 'react';
import Styles from './CatalogMenu.module.scss';
import CatalogDropdown from '../CatalogDropdown/CatalogDropdown';
import { Category } from './types';
import { useClickOutside } from '../../shared/helpers/useClickOutside';

const categories: Category[] = [
  {
    name: 'Комплектующие',
    subcategories: [
      { name: 'Процессоры', id: 'CPU' },
      { name: 'Видеокарты', id: 'GPU' },
      { name: 'Материнские платы', id: 'Motherboards' },
    ],
  },
  {
    name: 'Периферия',
    subcategories: [
      { name: 'Клавиатуры', id: 'Keyboards' },
      { name: 'Мыши', id: 'Mice' },
      { name: 'Мониторы', id: 'Monitors' },
    ],
  },
];

const CatalogMenu: FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  useClickOutside(menuRef, closeMenu);

  return (
    <div className={Styles.catalogMenu}>
      <button className={Styles.catalogButton} onClick={toggleMenu}>
        Каталог
      </button>
      {isOpen && (
        <div ref={menuRef}>
          <CatalogDropdown categories={categories} />
        </div>
      )}
    </div>
  );
};

export default CatalogMenu;
