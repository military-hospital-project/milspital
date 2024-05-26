import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import DetailMainHeader from './DetailMainHeader';

export default function DetailMain() {
  return (
    <MainContainer>
      <DetailMainHeader />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 2px solid ${palette('gray', 1)};
`;
