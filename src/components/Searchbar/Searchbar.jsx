import { useState } from 'react';

import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const onSearchQueryChange = e => {
    setSearchQuery(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    setSearchParams(query !== '' ? { query } : {});
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={onSearchQueryChange}
      />
    </SearchForm>
  );
}
