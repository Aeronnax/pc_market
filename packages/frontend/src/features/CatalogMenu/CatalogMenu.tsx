import { FC, useState } from 'react';
import Styles from './CatalogMenu.module.scss';
import CatalogDropdown from '../CatalogDropdown/CatalogDropdown';

const CatalogMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Styles.catalogMenu}>
      <button className={Styles.catalogButton} onClick={toggleMenu}>
        Каталог
      </button>
      {isOpen && <CatalogDropdown />}
    </div>
  );
};

export default CatalogMenu;