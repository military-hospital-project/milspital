import React from 'react';
import styled from 'styled-components';
import MainSearch from './MainSearch';
import logo from '../../../assets/images/logo2.webp';
import name from '../../../assets/images/name.webp';

export default function MainHeader() {
  return (
    <Main>
      <Search>
        <Image src={logo} alt='Logo' />
        <MainSearch />
      </Search>
      <MyPage src={name} alt='my-page' />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 10px;
`;

const Search = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 45px;
  height: 40px;
`;

const MyPage = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 100%;
`;
