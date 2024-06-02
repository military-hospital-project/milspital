import React from 'react';
import styled from 'styled-components';
import MainSearch from './MainSearch';
import Logo from '../../Logo';
import Profile from '../../Profile';

export default function MainHeader() {
  return (
    <MainContainer>
      <Search>
        <Logo />
        <MainSearch />
      </Search>
      <Profile />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 52px 0;
`;

const Search = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
