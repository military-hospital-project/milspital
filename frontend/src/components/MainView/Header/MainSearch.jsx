import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import search from '../../../assets/images/search.webp';
import ambulance from '../../../assets/images/ambulance.webp';

export default function MainSearch() {
  return (
    <SearchInput>
      <SearchImage src={search} alt='search' />
      <Search placeholder='검색시작' />
      <AmbulanceImage src={ambulance} alt='ambulance' />
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
`;

const AmbulanceImage = styled.img`
  width: 30px;
  height: 30px;
`;
