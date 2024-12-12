import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import Styles from './SearchBar.module.scss';
import clsx from 'clsx';
import SearchIcon from 'src/shared/icons/SearchIcon';

const SearchBar: FC = () => {
  const [searchItem, setSearchItem] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
      <div className={clsx(Styles.searchBar, isFocused && Styles.focused)}>
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
