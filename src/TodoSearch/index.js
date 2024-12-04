import React from 'react';
import './TodoSearch.css';
import { EmptySearchResults } from '../EmptySearchResults';

function TodoSearch({ searchValue, setSearchValue, searchedTodos }) {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearchContainer">
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      {searchValue && searchedTodos.length === 0 && (
        <EmptySearchResults searchText={searchValue} />
      )}
    </div>
  );
}

export { TodoSearch };
