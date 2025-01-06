import { FC } from 'react';
import MainLogo from 'src/entities/market/MainLogo/MainLogo';
import Styles from './Header.module.scss';
import SearchBar from 'src/features/market/SearchBar/SearchBar';
import CatalogMenu from 'src/features/market/CatalogMenu/CatalogMenu';
import LoginButton from 'src/features/login/LoginButton/LoginButton';
import CartButton from 'src/features/cart/CartButton/CartButton';
import { useMantineColorScheme } from '@mantine/core';

const Header: FC = () => {
  const { toggleColorScheme } = useMantineColorScheme();
  return (
    <header className={Styles.section}>
      <MainLogo />
      <CatalogMenu />
      <div className={Styles.searchBar}>
        <SearchBar />
      </div>
      <LoginButton />
      <CartButton />
      <button onClick={() => toggleColorScheme()}>Сменить тему</button>
    </header>
  );
};

export default Header;
