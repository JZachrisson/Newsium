import React from 'react';
import List from './List';
import useSemiPersistentState from './useSemiPersistentState';
import storiesReducer from './storiesReducer';
import SearchForm from './SearchForm';
import LastSearches from './LastSearches';
import axios from 'axios';
import {
  StyledContainer,
  StyledHeadlinePrimary,
  StyledButtonSmall,
} from './styles';

const API_BASE = 'http://hn.algolia.com/api/v1';
const API_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

const getUrl = (searchTerm: string, page: number) =>
  `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;

const extractSearchTerm = (url: string) =>
  url
    .substring(url.lastIndexOf('?') + 1, url.lastIndexOf('&'))
    .replace(PARAM_SEARCH, '');

const getLastSearches = (urls: string[]) =>
  urls
    .reduce((result: string[], url, index) => {
      const searchTerm = extractSearchTerm(url);

      if (index === 0) {
        return result.concat(searchTerm);
      }

      const previousSearchTerm = result[result.length - 1];

      if (searchTerm === previousSearchTerm) {
        return result;
      } else {
        return result.concat(searchTerm);
      }
    }, [])
    .slice(-6)
    .slice(0, -1);

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');
  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    page: 0,
    isLoading: false,
    isError: false,
  });
  const [urls, setUrls] = React.useState([getUrl(searchTerm, 0)]);

  const handleFetchStories = React.useCallback(async () => {
    if (searchTerm === '') return;

    dispatchStories({ type: 'STORIES_FETCH_INIT' });
    try {
      const lastUrl = urls[urls.length - 1];
      const result = await axios.get(lastUrl);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: {
          list: result.data.hits,
          page: result.data.page,
        },
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [urls]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item: Story) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSearch(searchTerm, 0);
    event.preventDefault();
  };

  const handleLastSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    handleSearch(searchTerm, 0);
  };

  const handleSearch = (searchTerm: string, page: any) => {
    const url = getUrl(searchTerm, page);
    setUrls(urls.concat(url));
  };

  const handleMore = () => {
    const lastUrl = urls[urls.length - 1];
    const searchTerm = extractSearchTerm(lastUrl);
    handleSearch(searchTerm, stories.page + 1);
  };

  const lastSearches = getLastSearches(urls);

  return (
    <StyledContainer>
      <StyledHeadlinePrimary>Newsium: Hacker News </StyledHeadlinePrimary>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <LastSearches
        lastSearches={lastSearches}
        onLastSearch={handleLastSearch}
      />

      {stories.isError && <p>Something went wrong...</p>}

      <List list={stories.data} onRemoveItem={handleRemoveStory} />

      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledButtonSmall type="button" onClick={handleMore}>
          More
        </StyledButtonSmall>
      )}
    </StyledContainer>
  );
}

export default App;
