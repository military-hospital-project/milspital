import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainPage/Header/MainHeader';
import MainBody from '../components/MainPage/Body/MainBody';

export default function MainView() {
  return (
    <Main>
      <MainHeader />
      <MainBody />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
