import { FC } from 'react';
import MainLogo from '../../../entities/market/MainLogo/MainLogo';
import Styles from './Header.module.scss';
import SearchBar from '../../../features/SearchBar/SearchBar';
import CatalogMenu from '../../../features/CatalogMenu/CatalogMenu';
import LoginButton from '../../../features/LoginButton/LoginButton';

const Header: FC = () => {
  return (
    <header className={Styles.section}>
      <MainLogo />
      <CatalogMenu />
      <SearchBar />
      <LoginButton />
    </header>
  );
};

export default Header;
