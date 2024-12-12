import { FC } from 'react';
import MainLogo from 'src/entities/market/MainLogo/MainLogo';
import Styles from './Header.module.scss';
import SearchBar from 'src/features/SearchBar/SearchBar';
import CatalogMenu from 'src/features/CatalogMenu/CatalogMenu';
import LoginButton from 'src/features/LoginButton/LoginButton';
import CartButton from 'src/features/CartButton/CartButton';

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
