import { FC } from 'react';
import MainLogo from '../../../entities/market/MainLogo/MainLogo';
import Styles from './Header.module.scss';
import SearchBar from '../../../features/SearchBar/SearchBar';
import CatalogMenu from '../../../features/CatalogMenu/CatalogMenu';
import LoginButton from '../../../features/LoginButton/LoginButton';
import CartButton from '../../../features/CartButton/CartButton';

const Header: FC = () => {
  return (
    <header className={Styles.section}>
      <MainLogo />
      <CatalogMenu />
      <div className={Styles.searchBar}>
        <SearchBar />
      </div>
      <LoginButton />
      <CartButton />
    </header>
  );
};

export default Header;
