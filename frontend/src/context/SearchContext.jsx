import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [postItems, setPostItems] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        postItems,
        setPostItems,
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
