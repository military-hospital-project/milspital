import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Profile from '../Profile';

export default function DetailHeader() {
  return (
    <MainContainer>
      <Logo />
      <Profile />
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
