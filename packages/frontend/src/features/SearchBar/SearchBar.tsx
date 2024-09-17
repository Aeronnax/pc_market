import React, { FC, useState } from 'react';
import Styles from './SearchBar.module.scss';
import SearchIcon from '../../shared/icons/SearchIcon';

const SearchBar: FC = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = () => {
    console.log('Поиск:', searchItem);
  }; //Потом когда нибудь добавить логику поиска

  return (
    <div className={Styles.searchBar}>
      <input
        type="text"
        className={Styles.searchInput}
        placeholder="Поиск..."
        value={searchItem}
        onChange={handleInputChange}
      />
      <button className={Styles.searchButton} onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
