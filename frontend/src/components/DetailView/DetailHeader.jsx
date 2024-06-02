import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo';
import Profile from '../Profile';

export default function DetailHeader() {
  const navigate = useNavigate();
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
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 16px;
`;
