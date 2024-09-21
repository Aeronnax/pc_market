import { FC, useState } from 'react';
import Styles from './CatalogMenu.module.scss';

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
    </div>
  );
};

export default CatalogMenu;
