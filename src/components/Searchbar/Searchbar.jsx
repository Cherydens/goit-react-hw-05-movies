import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ setSearchParams }) {
  const [searchQuery, setSearchQuery] = useState('');

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
Searchbar.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
