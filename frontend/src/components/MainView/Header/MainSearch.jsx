import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { useNavigate } from 'react-router-dom';
import searchImage from '../../../assets/images/search.webp';
import ambulanceImage from '../../../assets/images/ambulance.webp';

export default function MainSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      const params = new URLSearchParams();
      params.set('search', searchTerm);
      navigate({ search: `?${params.toString()}` });
      window.location.reload();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchInput>
      <SearchImage src={searchImage} alt='search' onClick={handleSearch} />
      <Search
        placeholder='검색시작'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <AmbulanceImage src={ambulanceImage} alt='ambulance' />
    </SearchInput>
  );
}

const SearchInput = styled.div`
  width: 450px;
  height: 100%;
  border-radius: 40px;
  border: 2px solid ${palette('green', 0)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-left: 10px;
`;

const Search = styled.input`
  width: 85%;
  height: 60%;
  font-size: 16px;
  color: ${palette('gray', 0)};
  border: none;
  outline: none;
`;

const SearchImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const AmbulanceImage = styled.img`
  width: 30px;
  height: 30px;
`;
