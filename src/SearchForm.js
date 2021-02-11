import React from 'react';
import InputWithLabel from './InputWithLabel';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={onSearchInput}
        >
          <strong>Search:</strong>
        </InputWithLabel>

        <button type="button" disabled={!searchTerm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
