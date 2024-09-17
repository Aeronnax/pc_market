import { FC } from 'react';
import MainLogo from '../../../entities/market/MainLogo/MainLogo';
import Styles from './Header.module.scss';
import SearchBar from '../../../features/SearchBar/SearchBar';

const Header: FC = () => {
  return (
    <header className={Styles.section}>
      <MainLogo />
      <SearchBar />
    </header>
  );
};

export default Header;
