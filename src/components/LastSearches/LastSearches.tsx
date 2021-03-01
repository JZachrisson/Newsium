import React from 'react';
import { StyledButtonSmall } from '../../styles';

type LastSearchesProps = {
  lastSearches: string[];
  onLastSearch: (searchTerm: string) => void;
};

const LastSearches = ({ lastSearches, onLastSearch }: LastSearchesProps) => {
  return (
    <div>
      {lastSearches.map((searchTerm, index) => (
        <StyledButtonSmall
          key={searchTerm + index}
          type="button"
          onClick={() => onLastSearch(searchTerm)}
        >
          {searchTerm}
        </StyledButtonSmall>
      ))}
    </div>
  );
};

export default LastSearches;
