import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './App.module.css';
import cs from 'classnames';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit} className={styles.searchForm}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={onSearchInput}
        >
          <strong>Search:</strong>
        </InputWithLabel>

        <button
          type="button"
          disabled={!searchTerm}
          className={cs(styles.button, styles.buttonLarge)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
