import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainView/Header/MainHeader';
import MainBody from '../components/MainView/Body/MainBody';

export default function MainView() {
  return (
    <Main>
      <MainHeader />
      <MainBody />
    </Main>
  );
}

const Main = styled.div`
  width: 1340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
