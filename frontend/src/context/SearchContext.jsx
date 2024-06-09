import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [postItems, setPostItems] = useState([]);

  return (
    <SearchContext.Provider
      value={{ searchResults, setSearchResults, postItems, setPostItems }}
    >
      {children}
    </SearchContext.Provider>
  );
};
