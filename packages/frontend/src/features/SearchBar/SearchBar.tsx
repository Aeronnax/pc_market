import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import Styles from './SearchBar.module.scss';
import SearchIcon from '../../shared/icons/SearchIcon';

const SearchBar: FC = () => {
  const [searchItem, setSearchItem] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setSearchItem(e.currentTarget.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log('Поиск:', searchItem);
  }; //Потом когда нибудь добавить логику поиска

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const clearSearch = () => {
    setSearchItem('');
  };
  return (
    <div className={Styles.searchContainer}>
      {isFocused &&
        createPortal(
          <div className={Styles.overlay} onClick={handleBlur}></div>,
          document.body
        )}
      <div className={Styles.searchBar}>
        <input
          type="text"
          className={Styles.searchInput}
          placeholder="Поиск..."
          value={searchItem}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {searchItem && (
          <button className={Styles.clearButton} onClick={clearSearch}>
            x
          </button>
        )}
        <button className={Styles.searchButton} onClick={handleSearch}>
          <div className={Styles.searchIcon}>
            <SearchIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
