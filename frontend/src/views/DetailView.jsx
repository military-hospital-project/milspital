import React from 'react';
import styled from 'styled-components';
import DetailHeader from '../components/DetailView/DetailHeader';
import DetailBody from '../components/DetailView/DetailBody';

export default function DetailView() {
  return (
    <Main>
      <DetailHeader />
      <DetailBody />
    </Main>
  );
}

const Main = styled.div`
  width: 1340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
