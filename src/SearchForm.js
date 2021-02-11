import React from 'react';
import InputWithLabel from './InputWithLabel';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit} className="search-form">
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
          className="button button_large"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
