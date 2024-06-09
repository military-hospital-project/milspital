import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearch } from '../../../context/SearchContext';
import searchImage from '../../../assets/images/search.webp';
import ambulanceImage from '../../../assets/images/ambulance.webp';

export default function MainSearch({ postData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { setSearchResults, setPostItems } = useSearch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('search') || '';
    setSearchTerm(searchQuery);
    if (searchQuery && postData) {
      handleSearch(searchQuery);
    } else {
      setSearchResults(postData);
    }
  }, [searchParams, postData]);

  const handleSearch = (query) => {
    if (!postData) return;
    if (!query) {
      setSearchResults(postData);
      navigate(window.location.pathname);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filtered = postData.filter(
      (item) =>
        item.diseaseName.toLowerCase().includes(lowerCaseQuery) ||
        item.hospitalName.toLowerCase().includes(lowerCaseQuery) ||
        item.departmentName.toLowerCase().includes(lowerCaseQuery) ||
        item.nickname.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchResults(filtered);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchTerm);
      if (searchTerm) {
        navigate(`?search=${searchTerm}`);
      } else {
        navigate(window.location.pathname);
      }
    }
  };

  const handleClickSearch = () => {
    handleSearch(searchTerm);
    if (searchTerm) {
      navigate(`?search=${searchTerm}`);
    } else {
      navigate(window.location.pathname);
    }
  };

  return (
    <SearchInput>
      <SearchImage src={searchImage} alt='search' onClick={handleClickSearch} />
      <Search
        placeholder='검색 시작'
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <AmbulanceImage
        src={ambulanceImage}
        alt='ambulance'
        onClick={handleClickSearch}
      />
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
  cursor: pointer;
`;
