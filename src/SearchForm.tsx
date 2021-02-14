import React from 'react';
import InputWithLabel from './InputWithLabel';
import { StyledSearchForm, StyledButtonLarge } from './styles';

type SearchFormProps = {
  searchTerm: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
}: SearchFormProps) => {
  return (
    <div>
      <StyledSearchForm onSubmit={onSearchSubmit}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={onSearchInput}
        >
          <strong>Search:</strong>
        </InputWithLabel>

        <StyledButtonLarge type="button" disabled={!searchTerm}>
          Submit
        </StyledButtonLarge>
      </StyledSearchForm>
    </div>
  );
};

export default SearchForm;
