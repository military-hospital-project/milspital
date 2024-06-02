import React from 'react';
import styled from 'styled-components';
import Logo from '../MainView/Header/Logo';
import name from '../../assets/images/name.webp';

export default function DetailHeader() {
  return (
    <MainContainer>
      <Logo />
      <MyPage src={name} alt='my-page' />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 16px;
  padding: 0 30px;
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
