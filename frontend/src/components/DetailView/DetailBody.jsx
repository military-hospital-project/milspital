import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import DetailMain from './DetailBox/DetailMain';

export default function DetailBody() {
  return (
    <MainContainer>
      <DetailMain />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${palette('gray', 1)};
  font-size: 14px;
`;
